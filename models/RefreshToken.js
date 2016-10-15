'use strict';

/**
 * Refresh token model
 */

const mongoose = require('mongoose');

const refreshTokenSchema = new mongoose.Schema({
  lastUpdated: {type: Date, expires: '336h'},
  user: mongoose.Schema.Types.ObjectId
});

refreshTokenSchema.pre("save", function(next) {
  this.lastUpdated = (new Date()).getTime();
  next();
});


module.exports = mongoose.model('RefreshToken', refreshTokenSchema);
