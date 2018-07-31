const User = require('../models/user');

const auth = async (req, res, next) => {
    await authorize(req.body);
};

const authorize = async (login_details) => {

    const user = await User.findOne({
        where: {
            username: login_details.username
        },
    });

     if(await user.authenticate(login_details.password)){
        return true;
    }else{
        const error = new Error(`Username or password incorrect`);
        error.status = 401;
        throw error;
    }

};

exports.auth = auth;
exports.authorize = authorize;

