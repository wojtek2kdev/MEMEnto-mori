const Vote = require('../models/vote');
const Meme = require('../models/meme');

const errorHandler = require('../middlewares/errors');

const fetchMemeVotes = async (req, res, next) => {
    const likes = await Vote.count({
        where: {
            good: '1',
            memeid: req.params.id
        }
    });
    const dislikes = await Vote.count({
        where: {
            bad: '1',
            memeid: req.params.id
        }
    });
    res.json({
        likes: likes ? likes : 0,
        dislikes: dislikes ? dislikes : 0
    });
};

const fetchUserVote = async (req, res, next) => {
    const vote = await Vote.findOne({
        attributes: ['good', 'bad'],
        where: {
            username: req.params.username,
            memeid: req.params.memeid
        }
    });
    res.send(vote);
};

const updateLikeVotes = async (req, res, next) => {

};

const updateDislikeVotes = async (req, res, next) => {

};
