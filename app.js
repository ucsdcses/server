// WELCOME TO APP.JS
//

// All the modules used for the server
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

// More modules, constant this time
const https = require('https');
const mongoose = require('mongoose');
const config = require('./config');
const authenticate = require('./middlewares/authenticate');
const sanitizer = require('express-sanitizer');
const formidable = require('express-formidable');

// All the extra routing for the showcase website
var routes = require('./routes/index');

// Read more here: http://expressjs.com/en/4x/api.html
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(sanitizer());
app.use(formidable.parse());
app.use(cookieParser(config.secret));
app.use(express.static(path.join(__dirname, 'client')));

mongoose.connect(config.dbURL);

app.use('/showcase', (req, res) => {
  res.sendFile(__dirname + '/client/showcase/index.html');
});

app.use('/cselabs', (req, res) => {
  res.sendFile(__dirname + '/client/cselabs/index.html');
});

app.use('/devfair', (req, res) => {
  res.sendFile(__dirname + '/client/devfair/index.html');
});


app.use(authenticate);
app.use('/api', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.sendFile(__dirname + '/client/404.html');
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.sendFile(__dirname + '/client/404.html');
});


module.exports = app;
