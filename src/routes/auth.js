const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/LoginController');
const PagesController = require('../controllers/PagesController');
const SessionController = require('../controllers/SessionController');

const errorHandler = require('../middlewares/errors');
const checkSession = require('../middlewares/check-session');

router.get(`/login`,
    checkSession(PagesController.home, PagesController.login)
);

router.get(`/logout`,
    checkSession(SessionController.logout, PagesController.home)
);

router.post(`/login`,
    LoginController.checkIfSessionActive,
    errorHandler.catchAsync(LoginController.auth)
);

module.exports = router;