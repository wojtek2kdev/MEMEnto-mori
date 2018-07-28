const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');

router.get('/', PagesController.home);
router.get('/login', PagesController.login);
router.get('/register', PagesController.register);

module.exports = router;