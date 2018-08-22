const second = 1000;

module.exports = {
    secret: "this-is-secret",
    saveUninitialized: false,
    resave: true,
    rolling: true,
    cookie: {
        maxAge: second * 60
    }
};