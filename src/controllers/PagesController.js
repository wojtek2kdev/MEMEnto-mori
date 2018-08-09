const path = require('path');

const home = (req, res) => {
    send(res, "../../index.html");
}

const login = async (req, res) => {
    await checkSession(
        req, 
        () => res.redirect("/"),
        () => send(res, "../../login.html")
    );
}

const register = async (req, res) => {
    await checkSession(
        req, 
        () => res.redirect("/"),
        () => send(res, "../../register.html")
    );
}

const addMeme = async (req, res) => {
    await checkSession(
        req,
        () => send(res, "../../add.html"),
        () => res.redirect("/auth/login")
    );
};

const checkSession = (req, onActive, onInactive) => {
    return new Promise(function(resolve, reject){
        if(req.session.user){
            onActive();
        }else{
            onInactive();
        }
        resolve();
    });
};

const send = (res,file) => {
    res.sendFile(path.join(__dirname, file));
};

exports.home = home;
exports.login = login;
exports.register = register;
exports.addMeme = addMeme;