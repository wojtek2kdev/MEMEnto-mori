const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/LoginController');
const PagesController = require('../controllers/PagesController');

const catchAsync = require('../middlewares/errors').catchAsync;

router.get(`/`,
    PagesController.login
);

router.post(`/`,
    catchAsync(LoginController.auth)
);

module.exports = router;