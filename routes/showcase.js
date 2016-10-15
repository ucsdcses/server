'use strict';

const express = require('express');
const router = express.Router();

router.use('/project', require('./project'));

module.exports = router;
