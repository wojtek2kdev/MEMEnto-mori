const Vote = require('../models/vote');
const Meme = require('../models/meme');

const errorHandler = require('../middlewares/errors');

const fetchMemeVotes = async (req, res, next) => {
    const likes = await Vote.count({
        where: {
            which: 'like',
            memeid: req.params.memeid
        }
    });
    const dislikes = await Vote.count({
        where: {
            which: 'dislike',
            memeid: req.params.memeid
        }
    });
    res.json({
        likes: likes ? likes : 0,
        dislikes: dislikes ? dislikes : 0
    });
};

const fetchUserVote = async (req, res, next) => {
    const vote = await Vote.findOne({
        attributes: ['which'],
        where: {
            username: req.params.username,
            memeid: req.params.memeid
        }
    });
    res.send(vote);
};

const updateVote = async (req, res, next) => {

    const memeid = req.params.memeid;
    const username = req.session.username;
    const which = req.params.which;

    const vote = await Vote.findOne({
        where: {
            memeid: req.params.memeid,
            username: username
        }
    });

    if(vote){
        await Vote.update({
            which: which,
            where: {
                memeid: memeid,
                username: username
            }
        });
    }else{
        await Vote.create({
            memeid: memeid,
            username: username,
            which: which
        });
    }

    res.end();

};

exports.fetchMemeVotes = fetchMemeVotes;
exports.fetchUserVote = fetchUserVote;
exports.updateVote = updateVote;
