const express = require('express');
const router = express.Router();
const ranking = require('../components/ranking/network');
const game = require('../components/game/network');

router.use('/game', game);
router.use('/game/ranking', ranking);

module.exports = router