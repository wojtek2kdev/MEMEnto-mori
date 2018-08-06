const getUser = (req, res, next) => {

    const user = req.session.user;

    if(user){
        res.json({
            id: user.id,
            username: user.username
        });
    }

    next();

};

exports.getUser = getUser;