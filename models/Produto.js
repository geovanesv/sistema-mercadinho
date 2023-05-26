const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const Fornecedor = require('./Fornecedor')


const Produto = db.define('Produto', {
  idProduto:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  codigo: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false
  },

  preco: {
    type: DataTypes.DOUBLE,
    required: true,
    allowNull: false
  },

  stock: {
    type: DataTypes.INTEGER,
    required: true,
    allowNull: false
  }
  
})

module.exports = Produto