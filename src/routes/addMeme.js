const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');

const errorHandler = require('../middlewares/errors');
const checkSession = require('../middlewares/check-session');

router.get(`/`,
    checkSession.onActiveSession(PagesController.addMeme)
);

module.exports = router;