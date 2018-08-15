const sequelize = require('../config/database');
const Meme = require('../models/meme');

const fetchMemes = async (req, res, next) => {
    
    const offset = getOffset(req);
    const category = req.params.category;

    const memes = await Meme.findAll({
        attributes: ['id', 'src', 'title', 'owner', 'category_name'],
        order: sequelize.literal('id DESC'),
        limit: 10,
        offset: offset,
        where: category ? {
            category_name: req.params.category
        } : undefined
    });

    res.send(memes);

};

const getOffset = req => req.params.site > 0 ? req.params.site * 10 : 0;


exports.fetchMemes = fetchMemes;