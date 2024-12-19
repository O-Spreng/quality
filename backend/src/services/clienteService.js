const Cliente = require('../models/Cliente');
const { Sequelize } = require('sequelize');

class ClienteService {
  async createCliente(data) {
    return await Cliente.create(data);
  }

  async getClientes(filters) {
    const where = {};
    if (filters.Codigo) where.Codigo = filters.Codigo;
    if (filters.Nome) where.Nome = { [Sequelize.Op.like]: `%${filters.Nome}%` };
    if (filters.Cidade) where.Cidade = { [Sequelize.Op.like]: `%${filters.Cidade}%` };
    if (filters.CEP) where.CEP = filters.CEP;

    return await Cliente.findAll({ where });
  }

  async getClienteById(id) {
    return await Cliente.findByPk(id);
  }

  async updateCliente(id, data) {
    return await Cliente.update(data, { where: { id } });
  }

  async deleteCliente(id) {
    return await Cliente.destroy({ where: { id } });
  }
}

module.exports = new ClienteService();
