const bunyan = require('bunyan');
const path = require('path');

const env = process.env.NODE_ENV;

// Disable stdout if not in dev
const stdoutLevel = env === 'dev' ? 'info' : bunyan.FATAL + 1;

// Disable error log if in test
const errLevel = env === 'test' ? bunyan.FATAL + 1 : 'error';

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
