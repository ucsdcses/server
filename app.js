// Node modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Custom modules
const log = require('./log');
const reqLog = require('./middleware/req-logger');
const errorHandler = require('./middleware/error-handler');

/* *************************************************************** */

const app = express();
const publicDir = path.join(__dirname, 'public');

// Register middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(reqLog);

/* *************************************************************** */

// Home
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

// CSELabs
app.get('/cselabs', (req, res) => {
  res.sendFile(path.join(publicDir, 'cselabs/index.html'));
});

// CSE Day
app.get('/cseday', (req, res) => {
  res.sendFile(path.join(publicDir, 'cseday/index.html'));
});

// DevFair
app.get('/devfair', (req, res) => {
  res.sendFile(path.join(publicDir, 'devfair/index.html'));
});

// Late Night Hacks
app.get('/late-night-hacks', (req, res) => {
  res.sendFile(path.join(publicDir, 'late-night/index.html'));
});

// Dynamic IP Counter
app.get('/dynamic', (req, res) => {
  res.sendFile(path.join(publicDir, 'dynamic/index.html'));
});

/* *************************************************************** */

// 500 errors
app.use(errorHandler);

// 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(publicDir, '404.html'));
});

const PORT = process.env.PORT || 3000;

// Export the app so it can be tested
module.exports = app.listen(PORT, () => log.info('Server listening on port', PORT));
