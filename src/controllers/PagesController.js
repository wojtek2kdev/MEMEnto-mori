const path = require('path');

exports.home = (req, res) => {
    send(res, "../../index.html");
}

exports.login = (req, res) => {
    send(res, "../../login.html");
}

exports.register = (req, res) => {
    send(res, "../../register.html");
}

const send = (res,file) => {
    res.sendFile(path.join(__dirname, file));
};