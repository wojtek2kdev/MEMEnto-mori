const PagesController = require('../controllers/PagesController');
const RegisterController = require('../controllers/RegisterController');
const CaptchaController = require('../controllers/CaptchaController');
const errorHandler = require('../middlewares/errors');

const express = require('express');
const router = express.Router();

const checkSession = require('../middlewares/check-session');

router.get('/', 
    checkSession.onInactiveSession(PagesController.register)
);

router.post('/', 
    CaptchaController.recaptcha.middleware.verify,
    CaptchaController.checkRecaptcha,
    errorHandler.catchAsync(RegisterController.addUser)
);

module.exports = router;