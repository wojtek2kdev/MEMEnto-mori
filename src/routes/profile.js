const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');

router.get('/', PagesController.profile);

router.get('/:username', PagesController.profile);

module.exports = router;