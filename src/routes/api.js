const SessionController = require('../controllers/SessionController');
const AddMemeController = require('../controllers/AddMemeController');

const express = require('express');
const router = express.Router();

router.get('/user',
    SessionController.getUser
);

router.post('/add',
    AddMemeController.checkSession
);

module.exports = router;