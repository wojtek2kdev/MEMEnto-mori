const sequelize = require('../config/sequelize');
const bcrypt = require('bcrypt');

const User = sequelize.define('users', {
    username: Sequelize.CHAR(20),
    password: Sequelize.CHAR(64)
}, {
    instanceMethods: {
        generateHash(password){
            bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
            return bcrypt.compare(password, this.password);
        }
    }
});

module.exports.create = (username, password) => {
    
    const user = User.build({
        username: username,
        password: 
    })

    user.save();

};