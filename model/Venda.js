const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const Cliente = require('./Cliente');
const Fornecedor = require('./Fornecedor');
const Produto = require('./Produto');

const Venda = db.define('Venda', {
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  valorTotal: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

// Relacionamento entre Venda e Cliente
Venda.belongsTo(Cliente, { as: 'cliente', foreignKey: 'clienteId' });

// Relacionamento entre Venda e Fornecedor
Venda.belongsTo(Fornecedor, { as: 'fornecedor', foreignKey: 'fornecedorId' });

// Relacionamento entre Venda e Produto
Venda.belongsToMany(Produto, { through: 'VendaProduto' });

module.exports = Venda;
