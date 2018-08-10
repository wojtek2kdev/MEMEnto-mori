const Meme = require('../models/meme');

const hash = require('object-hash');


const moveImage = (req, res, next) => {
    //const image = req.files.meme;
    //image.mv(`/static/images/${req.body.category}/${hash(image)}`);
   // console.log(`FILEHASH: ${hash(req.files.meme)}`);
   console.log(req.file.filename);
   console.log("HERE");
   
   
};

const resizeImage = (req, res, next) => {

};

const addPathToDatabase = async (req, res, next) => {
  //  console.log(`FILEHASH: ${hash(req.files.meme)}`);
};

exports.moveImage = moveImage;
exports.addPathToDatabase = addPathToDatabase;