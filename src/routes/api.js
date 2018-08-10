const SessionController = require('../controllers/SessionController');
const AddMemeController = require('../controllers/AddMemeController');

const express = require('express');
const router = express.Router();

const checkSession = require('../middlewares/check-session');

router.get('/user',
    SessionController.getUser
);

module.exports = router;