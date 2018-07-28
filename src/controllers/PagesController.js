const path = require('path');

exports.home = (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"));
}

exports.login = (req, res) => {
    res.sendFile(path.join(__dirname, "../../login.html"));
}

exports.register = (req, res) => {
    res.sendFile(path.join(__dirname, "../../register.html"));
}