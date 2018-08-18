const Vote = require('../models/vote');

const express = require('express');
const router = express.Router();

router.get('/whose/:username/:memeid');

router.get('/count/:memeid');

router.put('/:memeid/like');

router.put('/:memeid/dislike');

module.exports = router;