const User = require('../models/user');

exports.auth = async (req, res, next) => {

    const user = await User.findOne({
        where: {
            username: req.body.username
        },
    });

     if(await user.authenticate(req.body.password)){
        return true;
    }else{
        const error = new Error(`Username or password incorrect`);
        error.status = 401;
        throw error;
    }

};