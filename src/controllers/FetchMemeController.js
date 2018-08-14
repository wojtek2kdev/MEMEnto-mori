const Meme = require('../models/meme');

const fetchMemesByCategory = async (req, res, next) => {
    
    const offset = getOffset(req);

    const memes = await Meme.findAll({
        attributes: ['id', 'src', 'title', 'owner', 'category_name'],
        limit: 10,
        offset: 10 * offset,
        where: {
            category_name: req.params.category
        }
    });

    res.send(memes);

};

const fetchMemesGeneral = async (req, res, next) => {

    const offset = getOffset(req);

    const memes = await Meme.findAll({
        attributes: ['id', 'src', 'title', 'owner', 'category_name'],
        limit: 10,
        offset: 10 * offset
    });

    res.send(memes);

};

const getOffset = req => req.params.site > 0 ? req.params.site : 0;


exports.fetchMemesByCategory = fetchMemesByCategory;
exports.fetchMemesGeneral = fetchMemesGeneral;