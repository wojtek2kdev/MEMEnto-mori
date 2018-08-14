const Sequelize = require('sequelize');

module.exports = new Sequelize('memento', 'tinyrick', 'P4$$word1984', {
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
  
    operatorsAliases: false,

    timezone: "+02:00"
  
  });