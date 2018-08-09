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

const logout = (req, res, next) => {
    if(req.session.user){
        req.session.destroy();
    }
    res.redirect("/");
};

exports.logout = logout;
exports.getUser = getUser;