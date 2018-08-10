const Sequelize = require('sequelize');
const database = require('../config/database');

const User = require('./user');
const Meme = require('./meme');

const Vote = database.define('vote', {
    good: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    bad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
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