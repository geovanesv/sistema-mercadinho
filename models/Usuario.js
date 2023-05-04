const { DataTypes } = require('sequelize')
const db = require('../db/conn')



const Usuario = db.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    required: true
  },
  email: {
    type: DataTypes.STRING,
    required: true
  },
  password: {
    type: DataTypes.STRING,
    required: true
  },

})

module.exports = Usuario