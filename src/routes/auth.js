const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/LoginController');
const PagesController = require('../controllers/PagesController');

const errorHandler = require('../middlewares/errors');

router.get(`/login`,
    PagesController.login
);

router.get(`/logout`,
    LoginController.logout
);

router.post(`/login`,
    LoginController.checkIfSessionActive,
    errorHandler.catchAsync(LoginController.auth)
);

module.exports = router;