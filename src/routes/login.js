const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/LoginController');
const PagesController = require('../controllers/PagesController');

const errorHandler = require('../middlewares/errors');

router.get(`/`,
    PagesController.login
);

router.post(`/`,
    errorHandler.catchAsync(LoginController.auth)
);

module.exports = router;