const getUserFromSession = (req, res, next) => {

    const user = req.session.user;

    if(user){
        res.json({
            id: user.id,
            username: user.username
        });
    }

    next();

};

const getUserByUsername = async (req, res, next) => {

};

exports.getUserFromSession = getUserFromSession;
exports.getUserByUsername = getUserByUsername;