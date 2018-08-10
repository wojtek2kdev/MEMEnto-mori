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

exports.checkRecaptcha = checkRecaptcha;
exports.recaptcha = recaptcha;