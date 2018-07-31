exports.catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(err => next(err));
    }
};

exports.catchErrors = (err, req, res, next) => {
    res.send(err.status, {error: err.message});
};