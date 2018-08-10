const Sequelize = require('sequelize');
const database = require('../config/database');

const User = require('./user');
const Category = require('./category');

const Meme = database.define('meme', {
    src: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING(50),
        allowNull: false
    }, 
    owner: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    category: {
        type: Sequelize.STRING(30),
        allowNull: false
    }
},{
    freezeTableName: true,
});

Meme.belongsTo(User, {foreignKey: 'owner', targetKey: 'username'});
Meme.belongsTo(Category, {foreignKey: 'category', targetKey: 'name'});

module.exports = Meme;