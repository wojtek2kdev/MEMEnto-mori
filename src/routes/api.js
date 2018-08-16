const SessionController = require('../controllers/SessionController');
const AddMemeController = require('../controllers/AddMemeController');
const FetchMemeController = require('../controllers/FetchMemeController');
const MemeInfoController = require('../controllers/MemeInfoController');

const express = require('express');
const api = express.Router();

const multer = require('multer');
const upload = multer({dest: 'static/images/'});

const checkSession = require('../middlewares/check-session');
const errorHandler = require('../middlewares/errors');


api.get('/user',
    SessionController.getUser
);

api.get('/categories',
    MemeInfoController.fetchCategories
);

api.get('/memes', 
    errorHandler.catchAsync(FetchMemeController.fetchMemes)
);

api.get('/memes/:site',
    errorHandler.catchAsync(FetchMemeController.fetchMemes)
);

api.get('/memes/category/:category',
    errorHandler.catchAsync(FetchMemeController.fetchMemes)
);

api.get('/memes/category/:category/:site',
    errorHandler.catchAsync(FetchMemeController.fetchMemes)
);

api.post('/add', 
    upload.single('meme'),
    errorHandler.catchMemeError(AddMemeController.addMemeToDatabase),
);

module.exports = api;