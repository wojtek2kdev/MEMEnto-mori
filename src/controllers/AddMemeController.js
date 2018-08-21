const Meme = require('../models/meme');
const Category = require('../models/category');
const Vote = require('../models/vote');


const checkIfMemeAlreadyExists = async (req, res, next) => {

  const meme = await Meme.findOne({
    where: {
      owner: req.session.user.username
    }
  });

  if(meme){
    const err = new Error("Wait until your meme die");
    err.status = 400;
    throw err;
  }

  next();

};

const addMemeToDatabase = async (req, res, next) => {

      if(!req.file || !req.body.category || !req.body.title){
        const err = new Error("Form isn't complete");
        throw err;
      }

      const meme = await Meme.create({
        src: `/${req.file.path}`,
        title: req.body.title,
        owner: req.session.user.username,
        category_name: req.body.category
      });

      console.log("MIMETYPE: ", req.file.mimetype);

      if(!/image/.test(req.file.mimetype)){
        const err = new Error("Invalid mime type");
        err.status = 400;
        throw err;
      }

      res.redirect("/");
      
};

exports.checkIfMemeAlreadyExists = checkIfMemeAlreadyExists;
exports.addMemeToDatabase = addMemeToDatabase;