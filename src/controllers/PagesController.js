const path = require('path');

const home = (req, res) => send(res, "../../index.html");

const login = (req, res) => send(res, "../../login.html");

const register = (req, res) => send(res, "../../register.html");

const addMeme = (req, res) => send(res, "../../add.html");

const profile = (req, res) => send(res, "../../profile.html");

const send = (res,file) => {
    res.sendFile(path.join(__dirname, file));
};


exports.home = home;
exports.login = login;
exports.register = register;
exports.addMeme = addMeme;
exports.profile = profile;