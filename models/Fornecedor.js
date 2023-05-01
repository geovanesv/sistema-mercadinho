const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const Produto = require('./Produto')

const Fornecedor = db.define('Fornecedor', {
  id: {
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

Produto.belongsTo(Fornecedor)
Fornecedor.hasMany(Produto)

module.exports = Fornecedor;
