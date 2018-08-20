const UserInfoController = require('../controllers/UserInfoController');
const MemeInfoController = require('../controllers/MemeInfoController');

const express = require('express');
const api = express.Router();

const checkSession = require('../middlewares/check-session');
const errorHandler = require('../middlewares/errors');


api.get('/user',
    checkSession.onActiveSession(UserInfoController.getUserFromSession)
);

api.get('/user/:username',
    errorHandler.catchAsync(UserInfoController.getUserByUsername)
);

api.get('/categories',
    MemeInfoController.fetchCategories
);


module.exports = api;