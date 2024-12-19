'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clientes', {
      ID: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      idUsuario: {
        type: Sequelize.BIGINT,
      },
      DataHoraCadastro: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      Codigo: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      Nome: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      CPF_CNPJ: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      CEP: {
        type: Sequelize.INTEGER,
      },
      Logradouro: {
        type: Sequelize.STRING(100),
      },
      Endereco: {
        type: Sequelize.STRING(120),
      },
      Numero: {
        type: Sequelize.STRING(20),
      },
      Bairro: {
        type: Sequelize.STRING(50),
      },
      Cidade: {
        type: Sequelize.STRING(60),
      },
      UF: {
        type: Sequelize.STRING(2),
      },
      Complemento: {
        type: Sequelize.STRING(150),
      },
      Fone: {
        type: Sequelize.STRING(15),
      },
      LimiteCredito: {
        type: Sequelize.FLOAT,
      },
      Validade: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clientes');
  },
};

