const Meme = require('../models/meme');

const moveImage = image => {

};

const resizeImage = image => {

};

const checkSession = (req, res, next) => {
    if(!req.session.user){
        res.redirect("/auth/login");
    }
    next();
};

exports.checkSession = checkSession;