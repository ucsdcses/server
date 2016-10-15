'use strict';

/**
 * User model for storing and retrieving users information on the database
 */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  admin: Boolean,
  github: String,
  facebookId: String,
  facebookToken: String
});

/**
 * Validate the user given a password
 *
 * @param {string} password - user's password to be validated
 * @param {function} next - callback (isValid)
 */
userSchema.methods.validate = function (password, next) {
  bcrypt.compare(password, this.password, (err, res) => next(res));
};

/**
 * Register the user in the database
 *
 * @param {Object} user User to register in the database
 * @param {function} next callback (err, user)
 */
userSchema.statics.register = function (user, next) {
  let queryParams = [{'email': user.email}];

  if (user.facebookId)
    queryParams.push({'facebookId': user.facebookId});

  this.findOne({$or: queryParams}, (err, query) => {
    if (err) return next(err, null);

    // Email has already been taken
    if (query) {
      return next(new Error('This email/facebook has already been registered.'), user);
    }

    // Encrypt password and save user
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        user.save(() => next(null, user));
      });
    });
  });
};

module.exports = mongoose.model('User', userSchema);
