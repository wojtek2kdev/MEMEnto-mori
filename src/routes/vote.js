const express = require('express');
const router = express.Router();

const EvaluateMemeController = require('../controllers/EvaluateMemeController');

router.get('/whose/:username/:memeid', EvaluateMemeController.fetchUserVote);

router.get('/count/:memeid', EvaluateMemeController.fetchMemeVotes);

router.put('/:memeid/like');

router.put('/:memeid/dislike');

module.exports = router;