const clienteService = require('../services/clienteService');

module.exports = {
  async createCliente(req, res, next) {
    try {
      const cliente = await clienteService.createCliente(req.body);
      if (cliente.error) {
        return res.status(cliente.errorCode).json({ error: cliente.error });
      }
      res.status(201).json(cliente);
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
      if (!id) {
        res.status(400).json({ error: 'ID é obrigatório' });
      }
      await clienteService.updateCliente(id, req.body);
      res.status(204).json();
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
