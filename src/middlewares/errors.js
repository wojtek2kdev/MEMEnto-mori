const fs = require('fs');

const Meme = require('../models/meme');
const Vote = require('../models/vote');

exports.catchAsync = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(err => {
            catchErrors(err, req, res, next)
        });
    }
};

exports.catchMemeError = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(async err => {
            
            if(req.file){

                fs.unlink(req.file.path);
                
                const meme = await Meme.findOne({
                    where: {
                        src: req.file.path
                    }
                });

                if(meme){
                    await Meme.destroy({
                        where: {
                            src: meme.src
                        }
                    });
                }

            }
    
           catchErrors(err, req, res, next);

        });
    }
}

catchErrors = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({message: err.message});
    res.end();
};

