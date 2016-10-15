'use strict';

const jwt = require('jsonwebtoken');
const RefreshToken = require('../models/RefreshToken');
const secret = require('../config').secret;

const two_weeks_millis = 2*7*24*60*60*1000;

module.exports = (req, res, next) => {
  const authToken = req.signedCookies.Authorization;

  if (authToken) {
    jwt.verify(authToken, require('../config').secret, { algorithms: ['HS256'], ignoreExpiration: true }, (err, payload) => {
      if (err) {
        res.clearCookie('Authorization', null);
        return next();
      }

      if (((new Date()).getTime() / 1000) > payload.exp) {
        // Expired
        RefreshToken.findById(payload.refreshToken, (err, refToken) => {
          if (err || !refToken) {
            res.clearCookie('Authorization', null);
            return next();
          }

          refToken.save((err, refToken) => {
            if (err) {
              res.clearCookie('Authorization', null);
              return next();
            }

            const token = jwt.sign({ firstName: payload.firstName, lastName: payload.lastName, refreshToken: refToken._id },
              secret,
              { expiresIn: '10m', issuer: payload.iss });

            res.cookie('Authorization', token, {expire: (refToken.lastUpdated + two_weeks_millis), signed: true, httpOnly: false});
            req.userId = payload.iss;
            req.refreshToken = payload.refreshToken;
            next();
          });
        });
      } else {
        req.userId = payload.iss;
        req.refreshToken = payload.refreshToken;
        next();
      }
    });
  } else {
    res.clearCookie('Authorization', null);
    return next();
  }
};
