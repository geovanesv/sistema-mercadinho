const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const Cliente = db.define('Cliente', {
  idCliente: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
});

module.exports = Cliente;
