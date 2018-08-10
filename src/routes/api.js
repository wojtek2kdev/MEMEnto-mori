const SessionController = require('../controllers/SessionController');
const AddMemeController = require('../controllers/AddMemeController');

const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({dest: 'static/'});

const checkSession = require('../middlewares/check-session');


router.get('/user',
    SessionController.getUser
);

router.post('/add', 
    AddMemeController.moveImage,
    AddMemeController.addPathToDatabase
);

module.exports = router;