const log = require('../log');

module.exports = (req, res, next) => {
    res.on('finish', () => {
        if ((res.statusCode >= 200 && res.statusCode < 300) || res.statusCode === 304)
            log.debug(req.url, res.statusCode);
        else
            log.error(req.url, res.statusCode);
    });
    next();
};