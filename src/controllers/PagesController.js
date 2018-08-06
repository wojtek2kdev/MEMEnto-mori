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

const register = (req, res) => {
    send(res, "../../register.html");
}

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