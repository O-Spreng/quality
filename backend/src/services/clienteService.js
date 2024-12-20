const Cliente = require('../models/Cliente');
const { Sequelize } = require('sequelize');
const {generateUserId} = require("../utils");

class ClienteService {
  async createCliente(data) {
    if (!data.Codigo || !data.Nome || !data.CPF_CNPJ) {
      return { error: 'Código, Nome e Documento são obrigatórios', errorCode: 400 };
    }

    const payload = {
      ...data,
      idUsuario: generateUserId(),
      Endereco: `${data?.Logradouro}, ${data?.Numero}`,
    }

    return Cliente.create(payload);
  }

  async getClientes(filters) {
    const where = {};
    if (filters.Codigo) where.Codigo = filters.Codigo;
    if (filters.Nome) where.Nome = { [Sequelize.Op.like]: `%${filters.Nome}%` };
    if (filters.Cidade) where.Cidade = { [Sequelize.Op.like]: `%${filters.Cidade}%` };
    if (filters.CEP) where.CEP = filters.CEP;

    return await Cliente.findAll({ where });
  }

  async updateCliente(id, data) {
    if (!data.Codigo || !data.Nome || !data.CPF_CNPJ) {
      return { error: 'Código, Nome e Documento são obrigatórios', errorCode: 400 };
    }

    const payload = {
      ...data,
      Endereco: `${data?.Logradouro}, ${data?.Numero}`,
    }

    const result = await Cliente.update({
      ...payload
    }, { where: { id } });
    return result;
  }

  async deleteCliente(id) {
    return await Cliente.destroy({ where: { id } });
  }
}

module.exports = new ClienteService();
