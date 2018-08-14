const onActiveSession = fn => {
    return (req, res, next) => {
        if(req.session.user){
            fn(req, res, next);
        }else{
            res.redirect("/auth/login");
        }
    };
};

const onInactiveSession = fn => {
    return (req, res, next) => {
        if(!req.session.user){
            fn(req, res, next);
        }else{
            res.redirect("/");
        }
    };
};

exports.onActiveSession = onActiveSession;
exports.onInactiveSession = onInactiveSession;