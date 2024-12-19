const clienteService = require('../services/clienteService');

module.exports = {
  async createCliente(req, res, next) {
    try {
      const cliente = await clienteService.createCliente(req.body);
      res.status(201).json(cliente);
    } catch (error) {
      next(error);
    }
  },

  async getClienteById(req, res, next) {
    const { id } = req.params;
    try {
      const cliente = await clienteService.getClienteById(id);
      res.json(cliente);
    } catch (error) {
      next(error);
    }
  },

  async getClientes(req, res, next) {
    try {
      const clientes = await clienteService.getClientes(req.query);
      res.json(clientes);
    } catch (error) {
      next(error);
    }
  },

  async updateCliente(req, res, next) {
    const { id } = req.params;
    try {
      await clienteService.updateCliente(id, req.body);
      res.json({ message: 'Cliente atualizado com sucesso' });
    } catch (error) {
      next(error);
    }
  },

  async deleteCliente(req, res, next) {
    const { id } = req.params;
    try {
      await clienteService.deleteCliente(id);
      res.json({ message: 'Cliente deletado com sucesso' });
    } catch (error) {
      next(error);
    }
  },
};
