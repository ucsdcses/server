import * as http from 'http';
// Get dependencies
import * as express from "express";
const path = require('path');
const bodyParser = require('body-parser');

// Set up secret configs
require('dotenv').config({ silent: true });

// Get our API routes
import Events from './routes/events';

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../dist/assets/legacy-pages')));

// Set our api routes
app.use('/api/events', Events.getEvents);

app.get('/blueprint-cs', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../dist/assets/blueprint-cs/index.html'));
});

app.get('/devfair', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../dist/assets/legacy-pages/devfair/index.html'));
});

app.get('/cseday', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../dist/assets/legacy-pages/cseday/index.html'));
});

app.get('/cselabs', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../dist/assets/legacy-pages/cselabs/index.html'));
});

app.get('/late-night', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../dist/assets/legacy-pages/late-night/index.html'));
});

// Catch all other routes and return the index file
app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
