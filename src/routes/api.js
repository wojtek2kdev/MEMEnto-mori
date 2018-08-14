const SessionController = require('../controllers/SessionController');
const AddMemeController = require('../controllers/AddMemeController');
const FetchMemeController = require('../controllers/FetchMemeController');

const express = require('express');
const api = express.Router();

const multer = require('multer');
const upload = multer({dest: 'static/images/'});

const checkSession = require('../middlewares/check-session');
const errorHandler = require('../middlewares/errors');


api.get('/user',
    SessionController.getUser
);

api.get('/memes', 
    errorHandler.catchAsync(FetchMemeController.fetchMemesGeneral)
);

api.get('/memes/:site',
    errorHandler.catchAsync(FetchMemeController.fetchMemesGeneral)
);

api.get('/memes/:site/:category',
    errorHandler.catchAsync(FetchMemeController.fetchMemesByCategory)
);

api.post('/add', 
 //   errorHandler.catchAsync(AddMemeController.checkIfMemeAlreadyExists),
    upload.single('meme'),
    errorHandler.catchMemeError(AddMemeController.addMemeToDatabase),
);

module.exports = api;