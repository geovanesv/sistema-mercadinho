const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const Produto = require('./Produto')

const Fornecedor = db.define('Fornecedor', {
  idFornecedor: {
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

//relacionamentos
Produto.belongsTo(Fornecedor,{foreignKey: 'idFornecedor'}) //um produto pertece a um unico fornecedor
Fornecedor.hasMany(Produto,{foreignKey: 'idFornecedor'}) //um fornecedor pode ter varios produto

module.exports = Fornecedor;
