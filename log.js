'use strict';

const bunyan = require('bunyan');
const path = require('path');
const fs = require('fs');

const env = process.env.NODE_ENV;
const silent = bunyan.FATAL + 1;

// Disable stdout if not in dev
const stdoutLevel = env === 'dev' ? 'info' : silent;

// Disable error log if in test
const errLevel = env === 'test' ? silent : 'error';

// Create the logs directory if it doesn't already exist
try {
  fs.mkdirSync(path.join(__dirname, 'logs'));
}
catch (e) {
  if (e.code != 'EEXIST') throw e;
}

// Create the logger
const log = bunyan.createLogger({
  name: 'app',
  serializers: bunyan.stdSerializers,
  streams: [
    {
      level: stdoutLevel,
      stream: process.stdout
    },
    {
      level: errLevel,
      type: 'rotating-file',
      path: path.join(__dirname, 'logs', 'error.log'),
      period: '1d',
      count: 7
    }
  ],
  src: env !== 'production'
});

log.info('Logger initialized with environment', env);

module.exports = log;
