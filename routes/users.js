'use strict';

const express = require('express');
const router = express.Router();
const userUtils = require('../utils/userUtils');
const User = require('../models/User');
const bcrypt = require('bcrypt');

/**
 * /api/users?query&limit&includeme
 * GET: Get all the users from query (searches in firstName, lastName and email)
 *
 * EXPECTS: query, [limit], [includeme]
 * RESPONDS: json users: [{_id, firstName, lastName, email, facebookId}]
 *           Code 400 with error json for bad requests
 *           500 for internal server error
 */
router.get('/', (req, res) => {
  if (!req.query.query)
    return res.status(400).json({error: 'No query string provided.'});

  let regex = new RegExp('^' + req.query.query, "i");
  let mongooseQuery = User.find({$or: [{'firstName': regex}, {'lastName': regex}, {'email': regex}]},
    '_id firstName lastName email facebookId');

  if (req.query.limit) {
    let limit = parseInt(req.query.limit);

    if (limit) {
      mongooseQuery.limit(limit);
    }
    else {
      return res.status(400).json({error: 'Invalid limit.'});
    }
  }

  mongooseQuery.exec((err, users) => {
    if (err)
      return res.sendStatus(500);

    if (req.userId && !req.query.includeme) {
      for (let i = 0; i < users.length; i++) {
        if (users[i]._id == req.userId) {
          users.splice(i, 1);
          i--;
        }
      }
    }

    res.json(users);
  });
});


/**
 * /api/users/me
 * GET: Get the authenticated user's profile
 *
 * EXPECTS: Nothing
 * RESPONDS: json user: {firstName, lastName, email, github, facebookId, facebookToken}
 *           Code 401 for unauthenticated requests
 *           500 for internal server error
 */
router.get('/me', (req, res) => {
  if (!req.userId)
    return res.sendStatus(401);

  User.findById(req.userId, 'firstName lastName email github facebookId facebookToken', (err, user) => {
    if (err)
      return res.sendStatus(500);

    if (!user)
      return res.status(400).json({error: 'Invalid user.'});

    res.json(user);
  });
});


/**
 * /api/users/me
 * PUT: Update a user's profile
 *
 * EXPECTS: [firstName, lastName, email, password, github]
 * RESPONDS: 200 status code if OK
 *           Code 400 with error json for bad requests
 *           401 if the user isn't authenticated
 *           500 for internal server error
 */
router.put('/me', (req, res) => {
  if (!req.userId)
    return res.sendStatus(401);

  if (req.body.email && !userUtils.isValidEmail(req.body.email))
    return res.status(400).json({error: 'Invalid email.'});

  if (req.body.password) {
    let passwordWeakness = userUtils.passwordWeakness(req.body.password);
    if (passwordWeakness)
      return res.status(400).json({error: passwordWeakness});
  }

  User.findById(req.userId, 'firstName lastName email password github', (err, user) => {
    if (err)
      return res.sendStatus(500);

    if(req.body.firstName)
      req.body.firstName = req.sanitize(req.body.firstName);

    if(req.body.lastName)
      req.body.lastName = req.sanitize(req.body.lastName);

    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.github = req.body.github || user.github;
    if (req.body.password) {
      // Encrypt password and save user
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          user.password = hash;
          user.save((err, usr) => {
            if (err)
              return res.sendStatus(500);
            res.sendStatus(200);
          });
        });
      });
    } else {
      user.save((err, user) => {
        if (err)
          return res.sendStatus(500);
        res.sendStatus(200);
      });
    }
  });
});


module.exports = router;
