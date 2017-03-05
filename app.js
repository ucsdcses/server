/* 
 * WELCOME TO APP.JS, the file for initializing the app and 
 * gluing everything together
 */

// All the modules used for the server
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Unneccessary now, but maybe needed later
//const favicon = require('serve-favicon');
//const fs = require('fs');
//const https = require('https');

// More modules, constant this time
const mongoose = require('mongoose');
const config = require('./config');
const authenticate = require('./middlewares/authenticate');
const sanitizer = require('express-sanitizer');
const formidable = require('express-formidable');

// All the extra routing for the showcase website
const routes = require('./routes/index');

// Read more here: http://expressjs.com/en/4x/api.html
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Various services for the app, mainly stuff for the 
// showcase portion
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(sanitizer());
app.use(formidable.parse());
app.use(cookieParser(config.secret));
app.use(express.static(path.join(__dirname, 'client')));

// Connecting the database
mongoose.connect(config.dbURL);

// The showcase route
app.use('/showcase', (req, res) => {
    res.sendFile(__dirname + '/client/showcase/index.html');
});

// The cselabs route
app.use('/cselabs', (req, res) => {
    res.sendFile(__dirname + '/client/cselabs/index.html');
});

// The devfair route
app.use('/devfair', (req, res) => {
    res.sendFile(__dirname + '/client/devfair/index.html');
});


app.use(authenticate);
app.use('/api', routes);

// catch 404 and forward to error handler
app.use(function(req, res) {
    var err = new Error('Not Found');
    err.status = 404;
    res.sendFile(__dirname + '/client/404.html');
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.sendFile(__dirname + '/client/404.html');
});

// Exporting the application
module.exports = app;
