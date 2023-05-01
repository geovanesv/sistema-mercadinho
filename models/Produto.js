const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const Fornecedor = require('./Fornecedor')


const Produto = db.define('Produto', {
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
  
})

module.exports = Produto