const User = require('../models/user');

const auth = async (req, res, next) => {   

    const result = await authorize(req.body);

    if(result){
        req.session.user = result;
        res.redirect('/');
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

