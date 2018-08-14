const Sequelize = require('sequelize');
const database = require('../config/database');

const Category = database.define('category', {
    name: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
    }
},{
    freezeTableName: true,
});

module.exports = Category;