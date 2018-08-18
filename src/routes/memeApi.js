const SessionController = require('../controllers/SessionController');
const AddMemeController = require('../controllers/AddMemeController');
const FetchMemeController = require('../controllers/FetchMemeController');
const MemeInfoController = require('../controllers/MemeInfoController');

const express = require('express');
const api = express.Router();

const multer = require('multer');
const upload = multer({dest: 'static/images/'});

const errorHandler = require('../middlewares/errors');
const checkSession = require('../middlewares/check-session');


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

api.get('/count/memes',
    errorHandler.catchAsync(MemeInfoController.fetchMemesCount)
);

api.get('/count/memes/:category',
    errorHandler.catchAsync(MemeInfoController.fetchMemesCount)
);

api.get('/meme/:id',
    errorHandler.catchAsync(FetchMemeController.fetchMeme)
);

api.post('/add', 
    checkSession.onActiveSession((req, res, next) => next()),
    upload.single('meme'),
    errorHandler.catchMemeError(AddMemeController.addMemeToDatabase),
);

module.exports = api;