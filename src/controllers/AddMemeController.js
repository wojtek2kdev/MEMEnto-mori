const Meme = require('../models/meme');

const hash = require('object-hash');

const moveImage = (req, res, next) => {
    const image = req.files.meme;
    image.mv(`/static/images/${req.body.category}/${hash(image)}`);
};

const resizeImage = (req, res, next) => {

};

const addPathToDatabase = async (req, res, next) => {

};