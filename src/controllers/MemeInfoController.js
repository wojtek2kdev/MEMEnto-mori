const Category = require('../models/category');
const Meme = require('../models/meme');

const fetchCategories = async (req, res, next) => {

    const categories = await Category.findAll({
        attributes: ['name']
    });

    res.send(categories);

};

const fetchSitesCount = async (req, res, next) => {

    const category = req.params.category;

    const sites = await Meme.count({
        where: category ? {
            category_name: category
        } : undefined
    });

    res.json({sites: Math.ceil(sites/10)});

};

exports.fetchSitesCount = fetchSitesCount;
exports.fetchCategories = fetchCategories;