const User = require('../models/user');
const recaptchaConfig = require('../config/recaptcha.js');

const Recaptcha = require('express-recaptcha').Recaptcha;

const recaptcha = new Recaptcha(recaptchaConfig.SITE, recaptchaConfig.SECRET);

exports.checkRecaptcha = (req, res) => {
    if(req.recaptcha.error){
        console.log(`ERROR!`);
    }else{
        console.log(`SUCCESS!`);
    }
};

exports.recaptcha = recaptcha;