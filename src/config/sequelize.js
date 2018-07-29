const Sequelize = require('sequelize');

exports.sequelize = new Sequelize('memento', 'tinyrick', 'P4$$word1984', {
    host: 'localhost',
    dialect: 'postgres',
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  
    define: {
      timestamps: false
    },
  
    operatorsAliases: false
  
  });