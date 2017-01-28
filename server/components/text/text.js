'use strict';
const express = require('express');
const router = express.Router();

let textController = require('./controllers/text.server.controller.js');

router.post('/text', textController);

module.exports = router;
