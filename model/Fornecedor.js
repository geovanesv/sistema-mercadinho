const Sequelize = require('sequelize');
const sequelize = require('../db/conn');
const Produto = require('./Produto')

const Fornecedor = sequelize.define('Fornecedor', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING(20),
    allowNull: false
  }
});

Fornecedor.hasMany(Produto)

module.exports = Fornecedor;
