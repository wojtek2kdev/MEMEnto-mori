const express = require('express');
const router = express.Router();

const EvaluateMemeController = require('../controllers/EvaluateMemeController');

const checkSession = require('../middlewares/check-session');
const errorHandler = require('../middlewares/errors');

router.get('/whose/:username/:memeid', EvaluateMemeController.fetchUserVote);

router.get('/count/:memeid', EvaluateMemeController.fetchMemeVotes);

router.put('/:which/:memeid', 
    checkSession.onActiveSession((req, res, next) => next()),
    errorHandler.catchAsync(EvaluateMemeController.updateVote)
);

module.exports = router;