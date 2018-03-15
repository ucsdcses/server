// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Set up secret configs
require('dotenv').config({silent: true});

// Get our API routes
const facebookEvents = require('./routes/facebook-events');
const membersInfo = require('./routes/members');
const labs = require('./routes/labs');
const mongodb = require('mongodb');

const app = express();

const DB_URL = 'mongodb://localhost:27017/members';

//connects mongoDB/mongoose to our database we will store into
mongodb.MongoClient.connect(DB_URL, function(err,db){
  // Let the front end component handle any errors
  if (err) {
      console.log("Error on Connecting to the Database");
      return;
  }
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../dist/assets/legacy-pages')));

// Set our api routes
app.use('/api/facebook-events', facebookEvents);
app.use('/api/members',membersInfo);
app.use('/api/labs', labs);

app.get('/devfair', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/assets/legacy-pages/devfair/index.html'));
});

app.get('/cseday', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/assets/legacy-pages/cseday/index.html'));
});

app.get('/cselabs', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/assets/legacy-pages/cselabs/index.html'));
});

app.get('/late-night', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/assets/legacy-pages/late-night/index.html'));
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
