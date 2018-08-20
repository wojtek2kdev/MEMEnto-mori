const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');

const checkSession = require('../middlewares/check-session');

router.get('/', 
    checkSession.onActiveSession(PagesController.profile)
);

router.get('/:username', PagesController.profile);

module.exports = router;