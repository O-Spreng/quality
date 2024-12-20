const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  idUsuario: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  DataHoraCadastro: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  Codigo: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  Nome: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  CPF_CNPJ: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  CEP: {
    type: DataTypes.INTEGER
  },
  Logradouro: {
    type: DataTypes.STRING(100)
  },
  Endereco: {
    type: DataTypes.STRING(120)
  },
  Numero: {
    type: DataTypes.STRING(20)
  },
  Bairro: {
    type: DataTypes.STRING(50)
  },
  Cidade: {
    type: DataTypes.STRING(60)
  },
  UF: {
    type: DataTypes.STRING(2)
  },
  Complemento: {
    type: DataTypes.STRING(150)
  },
  Fone: {
    type: DataTypes.STRING(15)
  },
  LimiteCredito: {
    type: DataTypes.FLOAT
  },
  Validade: {
    type: DataTypes.DATEONLY
  },
}, {
  tableName: 'Clientes',
  timestamps: false,
});

module.exports = Cliente;
