const fs = require('fs');

exports.catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(err => {
            if(req.file){
                fs.unlink(req.file.path);
            }
            catchErrors(err, req, res, next)
        });
    }
};

catchErrors = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({message: err.message});
    res.end();
};