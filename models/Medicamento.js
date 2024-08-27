const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Medicamento = sequelize.define('hola', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    caducidad: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'medicamentos'
});

module.exports = Medicamento;
