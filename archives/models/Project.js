'use strict';

/**
 * Project model for storing and retrieving project information on the database
 */

const mongoose = require('mongoose');

const pendingProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  authors: [mongoose.Schema.Types.ObjectId],
  website: String,
  repo: String,
  imageUrl: String,
  date: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Project', pendingProjectSchema);
