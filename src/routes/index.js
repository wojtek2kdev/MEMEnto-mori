const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');

router.get('/', 
    PagesController.home
);

router.get('/meme/:id', 
    PagesController.home
);

router.get('/page/:site',
    PagesController.home
);

router.get('/category/:category',
    PagesController.home
);

router.get('/category/:category/:site',
    PagesController.home
);

module.exports = router;