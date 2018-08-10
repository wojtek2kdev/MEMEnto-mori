const User = require('../models/user');

const checkIfSessionActive = (req, res, next) => {
    if(req.session.user){
        res.status(400);
        res.send("You are already logged in.");
    }else{
        next();
    }
};

const auth = async (req, res, next) => {   

    const result = await authorize(req.body);

    if(result){
        req.session.user = result;
        res.end();
    }

};

const authorize = async (login_details) => {

    const user = await User.findOne({
        where: {
            username: login_details.username
        },
    });

    if(user){
     if(await user.authenticate(login_details.password)){
        return user.get({plain: true});
     }
    }

    const error = new Error(`Username or password incorrect`);
    error.status = 401;
    throw error;

};

exports.auth = auth;
exports.authorize = authorize;
exports.checkIfSessionActive = checkIfSessionActive;

