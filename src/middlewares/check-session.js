const checkSession = (onActive, onInactive) => {
    return (req, res, next) => {
        if(req.session.user){
            onActive(req, res, next);
        }else{
            onInactive(req, res, next);
        }
    }
};

module.exports = checkSession;