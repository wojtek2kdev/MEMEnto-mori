const Category = require('../models/category');

const fetchCategories = async (req, res, next) => {

    const categories = await Category.findAll({
        attributes: ['name']
    });

    res.send(categories);

};

exports.fetchCategories = fetchCategories;