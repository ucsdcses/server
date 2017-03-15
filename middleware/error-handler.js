const log = require('../log');
const path = require('path');

const errPath = path.join(__dirname, '..', 'public/500.html');

module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    log.error('Server error, headers already sent');
    return next(err);
  }

  log.error('Server error:', err.stack);
  res.status(500).sendFile(errPath);
};