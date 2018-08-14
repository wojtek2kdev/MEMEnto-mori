const Sequelize = require('sequelize');
const database = require('../config/database');

const User = require('./user');
const Meme = require('./meme');

const Vote = database.define('vote', {
    good: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    bad: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    memeid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING(20),
        allowNull: false,
    }
},{
    freezeTableName: true,
});

Vote.belongsTo(Meme, {foreignKey: 'memeid', targetKey: 'id'});
Vote.belongsTo(User, {foreignKey: 'username', targetKey: 'username'});

module.exports = Vote;