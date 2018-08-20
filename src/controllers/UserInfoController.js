const Vote = require('../models/vote');
const User = require('../models/user');
const Meme = require('../models/meme');

const getUserFromSession = async (req, res, next) => {

    const user = req.session.user;

    const likes = await Vote.count({
        where: {
            which: 'like',
        }
    });

    const dislikes = await Vote.count({
        where: {
            which: 'dislike'
        }
    });

    if(user){
        res.json({
            id: user.id,
            username: user.username,
            created_at: user.created_at,
            likes: likes,
            dislikes: dislikes
        });
    }

    next();

};

const getUserByUsername = async (req, res, next) => {



};

exports.getUserFromSession = getUserFromSession;
exports.getUserByUsername = getUserByUsername;