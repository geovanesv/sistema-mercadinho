const Sequelize = require('sequelize');
const sequelize = require('../db/conn');

const Cliente = sequelize.define('Cliente', {
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

module.exports = Cliente;
