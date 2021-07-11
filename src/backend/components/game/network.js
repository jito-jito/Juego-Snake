const express = require('express');
const game = express.Router();


game.use('/', express.static(__dirname + "/../../../../dist"));


module.exports = game