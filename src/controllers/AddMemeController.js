const Meme = require('../models/meme');
const Category = require('../models/category');

const addMemeToDatabase = async (req, res, next) => {

      const meme = await Meme.create({
        src: req.file.path,
        title: req.body.title,
        owner: req.session.user.username,
        category_name: req.body.category
      });

      if(!/image/.test(req.file.mimetype)){
        const err = new Error("Invalid mime type");
        err.status = 400;
        throw err;
      }

      res.redirect("/");
      
};

exports.addMemeToDatabase = addMemeToDatabase;