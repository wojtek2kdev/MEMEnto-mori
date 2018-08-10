const PagesController = require('../controllers/PagesController');
const RegisterController = require('../controllers/RegisterController');
const CaptchaController = require('../controllers/CaptchaController');
const errorHandler = require('../middlewares/errors');

const express = require('express');
const router = express.Router();

router.get('/', 
    PagesController.register
);

router.post('/', 
    RegisterController.recaptcha.middleware.verify,
    CaptchaController.checkRecaptcha,
    errorHandler.catchAsync(RegisterController.addUser)
);

module.exports = router;