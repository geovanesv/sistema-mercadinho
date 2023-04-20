const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const User = require('./User')


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

//Produto.belongsTo(User)
//User.hasMany(Produto)

module.exports = Produto