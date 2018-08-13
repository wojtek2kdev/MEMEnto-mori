const SessionController = require('../controllers/SessionController');
const AddMemeController = require('../controllers/AddMemeController');

const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({dest: 'static/images/'});

const checkSession = require('../middlewares/check-session');
const errorHandler = require('../middlewares/errors');


router.get('/user',
    SessionController.getUser
);

router.post('/add', 
    upload.single('meme'),
    errorHandler.catchAsync(AddMemeController.addMemeToDatabase)
);

module.exports = router;