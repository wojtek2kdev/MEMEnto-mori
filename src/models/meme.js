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
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1,50]
        }
    }, 
    owner: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    category_name: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    created_at: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: Sequelize.literal('now()')
    }
},{
    freezeTableName: true,
});

Meme.belongsTo(User, {foreignKey: 'owner', targetKey: 'username'});
Meme.belongsTo(Category, {foreignKey: 'category_name', targetKey: 'name'});

module.exports = Meme;