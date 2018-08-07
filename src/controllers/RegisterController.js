const User = require('../models/user');
const recaptchaConfig = require('../config/recaptcha.js');

const Recaptcha = require('express-recaptcha').Recaptcha;

const recaptcha = new Recaptcha(recaptchaConfig.SITE, recaptchaConfig.SECRET);

const checkRecaptcha = (req, res, next) => {
    if(req.recaptcha.error){
        res.redirect("/register");
    }
    console.log(`SUCCESS!`);
    next();
};

const addUser = async (req, res) => {

    const register_details = req.body;

    const user = await User.create({
        username: register_details.username,
        password: register_details.password,
        password_confirmation: register_details.password_confirmation
    });

    res.json({
        username: user.username
    });

};

exports.addUser = addUser;
exports.checkRecaptcha = checkRecaptcha;
exports.recaptcha = recaptcha;