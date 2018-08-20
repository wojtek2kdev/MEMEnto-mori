const logout = (req, res, next) => {
    if(req.session.user){
        req.session.destroy();
    }
    res.redirect("/");
};


exports.logout = logout;