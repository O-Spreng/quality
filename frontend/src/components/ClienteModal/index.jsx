import React, { useState } from 'react';
import axios from 'axios';

const ClienteModal = ({ mode, cliente, closeModal, refreshClientes }) => {
  const [formData, setFormData] = useState(cliente || {});

  const styles = {
    input: 'p-2 border border-neutral-300 rounded-md font-medium text-base',
    button: 'p-2 bg-neutral-200 border border-neutral-300 rounded-md font-medium text-base h-fit hover:bg-neutral-300 transition-all',
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // if (mode === 'create') {
      //   await axios.post('/api/clientes', formData);
      // } else if (mode === 'edit') {
      //   await axios.put(`/api/clientes/${cliente.id}`, formData);
      // }
      refreshClientes();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar cliente:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center transition-colors bg-black/20" onClick={closeModal}>
      <div
        className="bg-neutral-100 mx-auto w-[50%] h-fit py-4 px-8 rounded-xl flex flex-col items-center justify-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-medium">{mode === 'create' ? 'Adicionar Cliente' : mode === 'edit' ? 'Editar Cliente' : 'Detalhes do Cliente'}</h2>
        <form onSubmit={handleSubmit}>
          {mode === 'view' &&
            <>
              <input
                className={styles.input}
                type="text"
                name="ID"
                placeholder="ID"
                value={formData.ID || ''}
                onChange={handleChange}
                disabled
              />
              <input
                className={styles.input}
                type="text"
                name="idUsuario"
                placeholder="idUsuario"
                value={formData.idUsuario || ''}
                onChange={handleChange}
                disabled={mode === 'view'}
              />
            </>
          }
          <input
            className={styles.input}
            type="text"
            name="Nome"
            placeholder="Nome"
            value={formData.Nome || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />
          <input
            className={styles.input}
            type="text"
            name="Código"
            placeholder="Código"
            value={formData.Codigo || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />
          <input
            className={styles.input}
            type="text"
            name="Documento"
            placeholder="Documento"
            value={formData.Documento || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />
          <input
            className={styles.input}
            type="text"
            name="CEP"
            placeholder="CEP"
            value={formData.CEP || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />
          <input
            className={styles.input}
            type="text"
            name="Cidade"
            placeholder="Cidade"
            value={formData.Cidade || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />
          <input
            className={styles.input}
            type="text"
            name="Bairro"
            placeholder="Bairro"
            value={formData.Bairro || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />
          <input
            className={styles.input}
            type="text"
            name="UF"
            placeholder="UF"
            value={formData.Cidade || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />
          <input
            className={styles.input}
            type="text"
            name="Logradouro"
            placeholder="Logradouro"
            value={formData.Logradouro || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />
          <input
            className={styles.input}
            type="text"
            name="Número"
            placeholder="Número"
            value={formData.Numero || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />

          <input
            className={styles.input}
            type="text"
            name="Complemento"
            placeholder="Complemento"
            value={formData.Complemento || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />
          <input
            className={styles.input}
            type="text"
            name="Endereço"
            placeholder="Endereço"
            value={formData.Endereco || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />
          <input
            className={styles.input}
            type="text"
            name="Endereço"
            placeholder="Endereço"
            value={formData.Endereco || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />
          <input
            className={styles.input}
            type="tel"
            name="Telefone"
            placeholder="Telefone"
            value={formData.Fone || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />
          <input
            className={styles.input}
            type="tel"
            name="LimiteCredito"
            placeholder="Limite de Crédito"
            value={formData.LimiteCredito || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />
          <input
            className={styles.input}
            type="date"
            name="Validade"
            placeholder="Data de Validade"
            value={formData.Validade || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />

          <div className="flex flex-row">
            {mode !== 'view' && <button className={styles.button} type="submit">Salvar</button>}
            <button className={styles.button} onClick={closeModal}>Fechar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClienteModal;

