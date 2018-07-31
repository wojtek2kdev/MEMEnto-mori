const PagesController = require('../controllers/PagesController');
const RegisterController = require('../controllers/RegisterController');

const express = require('express');
const router = express.Router();

router.get('/', 
    PagesController.register
);

router.post('/', RegisterController.recaptcha.middleware.verify,
    RegisterController.checkRecaptcha
);

module.exports = router;