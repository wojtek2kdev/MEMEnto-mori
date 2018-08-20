const User = require('../models/user');

const addUser = async (req, res) => {

    const register_details = req.body;

    const user = await User.create({
        username: register_details.username,
        password: register_details.password,
        password_confirmation: register_details.password_confirmation
    });

    req.session.user = user;
    res.redirect("/");

};

exports.addUser = addUser;