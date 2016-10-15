'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const userUtils = require('../utils/userUtils');
const secret = require('../config').secret;
const RefreshToken = require('../models/RefreshToken');

const request = require('request');

const two_weeks_millis = 14 * 24 * 3600000;

router.use('/users', require('./users'));
router.use('/showcase', require('./showcase'));

/**
 * /api/login
 * POST: Verify user's credentials and get the JWT
 *
 * EXPECTS: email, password
 * RESPONDS: 200 status code if OK
 *           Code 400 with error json for bad requests
 *           500 for internal server error
 */
router.post('/login', (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ error: 'Email or password not specified.' });
  }

  User.findOne({ 'email': req.body.email }, (err, user) => {
    if (err) {
      return res.sendStatus(500);
    }

    // Invalid email
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // validate user through password
    user.validate(req.body.password, isValid => {
      if (!isValid) {
        return res.status(400).json({ error: 'Invalid email or password.' });
      }

      // Generate the refresh token
      let refreshToken = new RefreshToken({user: user._id});

      refreshToken.save((err, refToken) => {
        if (err)
          return res.sendStatus(500);

        const token = jwt.sign({ firstName: user.firstName, lastName: user.lastName, refreshToken: refToken._id },
          secret,
          { expiresIn: '10m', issuer: user.id });

        res.cookie('Authorization', token, {maxAge: two_weeks_millis, signed: true, httpOnly: false});
        res.sendStatus(200);
      });
    });
  })
});



/**
 * /api/register
 * POST: Register user and get the JWT
 *
 * EXPECTS: firstName, lastName, email, password, [github], [facebookId: string, facebookToken: string]
 * RESPONDS: 200 status code if OK
 *           Code 400 with error json for bad requests
 *           500 for internal server error
 */
router.post('/register', (req, res) => {
  if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password)
    return res.status(400).json({error: 'One or more required fields are missing.'});

  if ((req.body.facebookId && !req.body.facebookToken) || (!req.body.facebookId && req.body.facebookToken))
    return res.status(400).json({error: 'Incomplete facebook info. One of id or token is missing.'});

  if (!userUtils.isValidEmail(req.body.email))
    return res.status(400).json({error: 'Invalid email.'});

  let passWeakness = userUtils.passwordWeakness(req.body.password);
  if (passWeakness)
    return res.status(400).json({error: passWeakness});

  let registerUser = () => {
    req.body.firstName = req.sanitize(req.body.firstName);
    req.body.lastName = req.sanitize(req.body.lastName);
    const user = new User(req.body);
    user.admin = false;

    User.register(user, (err, user) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      // Generate the refresh token
      let refreshToken = new RefreshToken({user: user._id});

      refreshToken.save((err, refToken) => {
        if (err)
          return res.sendStatus(500);

        const token = jwt.sign({ firstName: user.firstName, lastName: user.lastName, refreshToken: refToken._id },
          secret,
          { expiresIn: '10m', issuer: user.id });

        res.cookie('Authorization', token, {maxAge: two_weeks_millis, signed: true, httpOnly: false});
        res.sendStatus(200);
      });
    });
  };

  if (req.body.facebookToken) {
    isValidFBToken(req.body.facebookToken, (isValid, id) => {
      if (!isValid)
        return res.status(400).json({error: 'Invalid facebook token.'});

      req.body.facebookId = id;
      registerUser();
    });
  } else {
    registerUser();
  }
});


/**
 * /api/facebook/login
 * POST: Login user using facebook id and accessToken and get the JWT
 *
 * EXPECTS: id, token
 * RESPONDS: 200 status code if OK
 *           Code 401 if the user has never signed up to our system
 *           400 with error json for bad request
 *           500 for internal server error
 */
router.post('/facebook/login', (req, res) => {
  if (!req.body.id || !req.body.token) {
    return res.status(400).json({error: 'id and token from facebook not specified'});
  }

  let token = req.body.token;
  
  isValidFBToken(req.body.token, function (isValid, id) {
    if (isValid) {
      // valid token

      User.findOne({'facebookId': id}, (err, user) => {
        if (!user)
          return res.sendStatus(401);

        if (err) {
          return res.sendStatus(500);
        }

        // User already exists. Update the accessToken
        user.facebookToken = token;
        user.save();

        // Generate the refresh token
        let refreshToken = new RefreshToken({user: user._id});

        refreshToken.save((err, refToken) => {
          if (err)
            return res.sendStatus(500);

          const token = jwt.sign({firstName: user.firstName, lastName: user.lastName, refreshToken: refToken._id},
            secret,
            {expiresIn: '10m', issuer: user.id});

          res.cookie('Authorization', token, {maxAge: two_weeks_millis, signed: true, httpOnly: false});
          res.sendStatus(200);
        });
      });
    } else {
      return res.sendStatus(401);
    }
  });
});


/**
 * /api/logout
 * POST: Remove the refresh token from the database to finalize the logout
 *
 * EXPECTS: just the authToken in the header
 * RESPONDS: 200 status code if OK
 *           Code 401 for unauthorized token
 *           400 with error json
 *           500 for internal server error
 */
router.post('/logout', (req, res) => {
  res.clearCookie('Authorization', null);
  if (!req.userId)
    return res.sendStatus(401);

  RefreshToken.findByIdAndRemove(req.refreshToken, (err, token) => {
    if (err)
      return res.sendStatus(500);

    if (!token)
      return res.status(400).json({error: 'Invalid token in header.'});

    res.sendStatus(200);
  });
});


/**
 * /api/facebook/link
 * POST: Link the facebook account to the logged in user
 *
 * EXPECTS: id, token
 * RESPONDS: 200 status code if OK
 *           Code 401 if the user has never signed up to our system
 *           400 with error json for bad request
 *           500 for internal server error
 */
router.post('/facebook/link', (req, res) => {
  if (!req.userId)
    return res.sendStatus(401);

  if (!req.body.id || !req.body.token) {
    return res.status(400).json({error: 'id and token from facebook not specified'});
  }

  let token = req.body.token;

  isValidFBToken(req.body.token, function (isValid, id) {
    if (isValid) {
      // valid token
      User.findOne({'facebookId': id}, (err, fbUser) => {
        if (err)
          return res.sendStatus(500);

        if (fbUser)
          return res.status(400).json({error: 'Your facebook is already linked to another CSES account.'});

        User.findById(req.userId, (err, user) => {
          if (err || !user)
            return res.sendStatus(500);

          user.facebookId = id;
          user.facebookToken = token;
          user.save((err, usr) => {
            if (err || !usr)
              return res.sendStatus(500);

            res.sendStatus(200);
          });
        });
      });
    } else {
      return res.sendStatus(401);
    }
  });
});


/**
 * /api/facebook/unlink
 * POST: Unlink the facebook account for the logged in user
 *
 * EXPECTS: Nothing
 * RESPONDS: 200 status code if OK
 *           Code 401 if the user is not authenticated
 *           400 with error json for bad request
 *           500 for internal server error
 */
router.post('/facebook/unlink', (req, res) => {
  if (!req.userId)
    return res.sendStatus(401);

  User.findById(req.userId, (err, user) => {
    if (err)
      return res.sendStatus(500);

    if (!user)
      return res.sendStatus(401);

    user.facebookId = undefined;
    user.facebookToken = undefined;
    user.save((err, usr) => {
      if (err)
        return res.sendStatus(500);

      res.sendStatus(200);
    });
  });
});


const isValidFBToken = (token, next) => {
  let path = 'https://graph.facebook.com/me?access_token=' + token;
  request(path, function (error, response, body) {
    if (!error && response && response.statusCode && response.statusCode == 200) {
      // valid token
      next(true, JSON.parse(body).id);
    } else {
      next(false, null);
    }
  });
};

module.exports = router;
