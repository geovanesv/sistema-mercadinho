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

// // Relacionamento entre Venda e Cliente
Venda.belongsTo(Cliente, { foreignKey: 'idCliente' }); //uma venda pertence a um cliente
Cliente.hasMany(Venda, { foreignKey: 'idCliente' }); //um cliente pode ter feito varias compras

// // Relacionamento entre Venda e Fornecedor
Venda.hasMany(Fornecedor, { foreignKey: 'idFornecedor' }); //uma venda pode ter muitos fornecedores
Fornecedor.hasMany(Venda,{foreignKey: 'idFornecedor'}) //um fornecedor pode ter varias vendas
// // Relacionamento entre Venda e Produto
Venda.hasMany(Produto, {foreignKey: 'idProduto' });
Produto.hasMany(Venda,{foreignKey:'idProduto'});


// Venda.belongsTo(Cliente);
// Cliente.hasMany(Venda);

module.exports = Venda;