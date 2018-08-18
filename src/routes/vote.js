const express = require('express');
const router = express.Router();

const EvaluateMemeController = require('../controllers/EvaluateMemeController');

const checkSession = require('../middlewares/check-session');
const errorHandler = require('../middlewares/errors');

router.get('/my/:memeid', 
    errorHandler.catchAsync(EvaluateMemeController.fetchUserVote)
);

router.get('/count/:memeid', 
    errorHandler.catchAsync(EvaluateMemeController.fetchMemeVotes)
);

router.put('/', 
    checkSession.onActiveSession((req, res, next) => next()),
    errorHandler.catchAsync(EvaluateMemeController.updateVote)
);

module.exports = router;