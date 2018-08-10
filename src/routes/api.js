const SessionController = require('../controllers/SessionController');

const express = require('express');
const router = express.Router();

router.get('/user',
    SessionController.getUser
);

router.post('/add');

module.exports = router;