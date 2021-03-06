const Sequelize = require('sequelize');
const database = require('../config/database');

const User = require('./user');

const Vote = database.define('vote', {
    which: {
        type: Sequelize.ENUM,
        values: ['like','dislike']
    },
    memeid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    meme_owner: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
},{
    freezeTableName: true,
});

Vote.belongsTo(User, {foreignKey: 'username', targetKey: 'username'});

module.exports = Vote;