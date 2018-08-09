const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');

const errorHandler = require('../middlewares/errors');

router.get(`/`,
    PagesController.addMeme
);

module.exports = router;