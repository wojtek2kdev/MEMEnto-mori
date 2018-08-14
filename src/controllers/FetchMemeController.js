const Meme = require('../models/meme');

const fetchMemesByCategory = (req, res, next) => {
    console.log(req.params);
};

const fetchMemesGeneral = (req, res, next) => {
    console.log(req.params);
};

exports.fetchMemesByCategory = fetchMemesByCategory;
exports.fetchMemesGeneral = fetchMemesGeneral;