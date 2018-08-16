const Category = require('../models/category');
const Meme = require('../models/meme');

const fetchCategories = async (req, res, next) => {

    const categories = await Category.findAll({
        attributes: ['name']
    });

    res.send(categories);

};

const fetchMemesCount = async (req, res, next) => {

    const category = req.params.category;

    const count = await Meme.count({
        where: category ? {
            category_name: category
        } : undefined
    });

    res.json({memes: count});

};

exports.fetchMemesCount = fetchMemesCount;
exports.fetchCategories = fetchCategories;