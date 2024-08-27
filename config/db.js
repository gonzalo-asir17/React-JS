const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('farmacia', 'root', 'cacerola7', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
