// Node modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Custom modules
const log = require('./log');
const reqLog = require('./middleware/req-logger');
const errorHandler = require('./middleware/error-handler');

/////////////////////////////////////////////////////////////////////

const app = express();
const public = path.join(__dirname, 'public');

// Register middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

/////////////////////////////////////////////////////////////////////

// Home
app.get('/', (req, res) => {
    res.sendFile(path.join(public, 'index.html'));
});

// CSELabs
app.get('/cselabs', (req, res) => {
    res.sendFile(path.join(public, 'cselabs/index.html'));
});

// CSE Day
app.get('/cseday', (req, res) => {
    res.sendFile(path.join(public, 'cseday/index.html'));
});

// DevFair
app.get('/devfair', (req, res) => {
    res.sendFile(path.join(public, 'devfair/index.html'));
});

// Late Night Hacks
app.get('/late-night-hacks', (req, res) => {
    res.sendFile(path.join(public, 'late-night/index.html'));
});

// Dynamic IP Counter
app.get('/dynamic', (req, res) => {
    res.sendFile(path.join(public, 'dynamic/index.html'));
});

/////////////////////////////////////////////////////////////////////

// 500 errors
app.use(errorHandler);

// 404 errors
app.use((req, res) => {
    res.status(404).sendFile(path.join(public, '404.html'));
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => log.info('Server listening on port', PORT));