const Vote = require('../models/vote');
const User = require('../models/user');
const Meme = require('../models/meme');

const getUserFromSession = async (req, res, next) => {

    const user = req.session.user;

    const votes = await getVotes(user.username);

    if(user){
        res.json({
            id: user.id,
            username: user.username,
            created_at: user.created_at,
            likes: votes.likes,
            dislikes: votes.dislikes
        });
    }

    next();

};

const getUserByUsername = async (req, res, next) => {

    const username = req.params.username;

    const user = await User.findOne({
        attributes: ['id', 'created_at'],
        where: {
            username: username
        }
    });

    const votes = await getVotes(username);

    res.json({
        id: user.id,
        username: username,
        created_at: user.created_at,
        likes: votes.likes,
        dislikes: votes.dislikes
    });

};

const getVotes = async (username) => {

    console.log('USERNAME:', username);

    const likes = await Vote.count({
        where: {
            which: 'like',
            meme_owner: username
        }
    });
    const dislikes = await Vote.count({
        where: {
            which: 'dislike',
            meme_owner: username
        }
    });
    return {
        likes: likes,
        dislikes: dislikes
    }
};


exports.getUserFromSession = getUserFromSession;
exports.getUserByUsername = getUserByUsername;