const SessionController = require('../controllers/SessionController');
const MemeInfoController = require('../controllers/MemeInfoController');

const express = require('express');
const api = express.Router();

const checkSession = require('../middlewares/check-session');
const errorHandler = require('../middlewares/errors');


api.get('/user',
    SessionController.getUser
);

api.get('/categories',
    MemeInfoController.fetchCategories
);


module.exports = api;