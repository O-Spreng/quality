import React, { useState } from 'react';
import axios from 'axios';
import {parseDate} from "../../utils/index.js";

const API_ENDPOINT = import.meta.env.VITE_ENDPOINT_API;

const ClienteModal = ({ mode, cliente, closeModal, refreshClientes }) => {
  const [formData, setFormData] = useState(cliente || {});
  const [loadingCep, setLoadingCep] = useState(false);

  const styles = {
    input: 'p-2 border border-neutral-300 rounded-md font-medium text-base w-full disabled:bg-slate-200 disabled:text-neutral-600',
    button: 'p-2 bg-neutral-200 border border-neutral-300 rounded-md font-medium text-base h-fit hover:bg-neutral-300 transition-all',
    row: 'w-full flex flex-row gap-4'
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === 'create') {
        await axios.post(`${API_ENDPOINT}/api/clientes`, formData);
      } else if (mode === 'edit') {
        await axios.put(`${API_ENDPOINT}/api/clientes/${cliente.id}`, formData);
      }
      refreshClientes();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar cliente:', error);
    }
  };

  const handleCepBlur = async () => {
    const { CEP } = formData;
    if (!CEP || CEP.length !== 8) return;

    setLoadingCep(true);
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`);
      if (response.data.erro) {
        alert('CEP não encontrado!');
      } else {
        const { logradouro, bairro, localidade, uf, complemento } = response.data;
        setFormData((prevData) => ({
          ...prevData,
          Logradouro: logradouro,
          Bairro: bairro,
          Cidade: localidade,
          UF: uf,
          Complemento: complemento,
        }));
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      alert('Erro ao buscar informações do CEP.');
    } finally {
      setLoadingCep(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center transition-colors bg-black/20" onClick={closeModal}>
      <div
        className="bg-neutral-100 mx-auto w-fit h-fit py-4 px-8 rounded-xl flex flex-col items-center justify-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-medium">
          {mode === 'create'
            ? 'Adicionar Cliente'
            : mode === 'edit'
              ? 'Editar Cliente'
              : 'Detalhes do Cliente'
          }
        </h2>
        <form className="flex flex-col gap-4 max-w-2xl" onSubmit={handleSubmit}>
          {mode === 'view' &&
            <>
              <div className={styles.row}>
                <input
                  className={styles.input}
                  type="text"
                  name="ID"
                  placeholder="ID"
                  value={formData.id || ''}
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
                  disabled
                />
              </div>
              <input
                className={styles.input}
                type="text"
                name="DataHoraCadastro"
                placeholder="Data de Cadastro"
                value={parseDate(formData.DataHoraCadastro) || ''}
                onChange={handleChange}
                disabled
              />
            </>
          }
          <div className={styles.row}>
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
              name="Codigo"
              placeholder="Código"
              value={formData.Codigo || ''}
              onChange={handleChange}
              disabled={mode === 'view'}
            />
          </div>
          <div className={styles.row}>
            <input
              className={styles.input}
              type="text"
              name="CPF_CNPJ"
              placeholder="CPF ou CNPJ"
              value={formData.CPF_CNPJ || ''}
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
              onBlur={handleCepBlur}
              disabled={mode === 'view'}
            />
          </div>
          {loadingCep && <p>Buscando informações do CEP...</p>}
          <div className={styles.row}>
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
              className={`${styles.input} w-1/4`}
              type="text"
              name="Numero"
              placeholder="Número"
              value={formData.Numero || ''}
              onChange={handleChange}
              disabled={mode === 'view'}
            />
          </div>
          <div className={styles.row}>
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
              name="Complemento"
              placeholder="Complemento"
              value={formData.Complemento || ''}
              onChange={handleChange}
              disabled={mode === 'view'}
            />
          </div>
          <div className={styles.row}>
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
              className={`${styles.input} w-1/4`}
              type="text"
              name="UF"
              placeholder="UF"
              value={formData.UF || ''}
              onChange={handleChange}
              disabled={mode === 'view'}
            />
          </div>
          <input
            className={styles.input}
            type="tel"
            name="Fone"
            placeholder="Telefone"
            value={formData.Fone || ''}
            onChange={handleChange}
            disabled={mode === 'view'}
          />
          <div className={styles.row}>
            <input
              className={styles.input}
              type="text"
              name="LimiteCredito"
              placeholder="Limite de Crédito"
              value={formData.LimiteCredito || ''}
              onChange={handleChange}
              disabled={mode === 'view'}
            />
            <input
              className={`${styles.input} `}
              type="date"
              name="Validade"
              placeholder="Data de Validade"
              value={formData.Validade || ''}
              onChange={handleChange}
              disabled={mode === 'view'}
            />
          </div>

          <div className="flex flex-row w-full gap-4 justify-end">
            {mode !== 'view' && (
              <button className={styles.button} type="submit">
                Salvar
              </button>
            )}
            <button className={styles.button} onClick={closeModal}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClienteModal;
