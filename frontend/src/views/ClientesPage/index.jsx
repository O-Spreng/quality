import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FiltroClientes from "../../components/FiltroClientes";
import ClientesTable from "../../components/ClientesTable";
import ClienteModal from "../../components/ClienteModal";

const API_ENDPOINT = import.meta.env.VITE_ENDPOINT_API;

const ClientesPage = () => {
  const [clientes, setClientes] = useState([]);
  const [filtros, setFiltros] = useState({ Codigo: '', Nome: '', Cidade: '', CEP: '' });
  const [modal, setModal] = useState({ open: false, mode: 'view', cliente: null });

  const fetchClientes = async (queryParams = {}) => {
    try {
      const { data } = await axios.get(`${API_ENDPOINT}/api/clientes`, { params: queryParams });
      setClientes(data);

    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  const openModal = (mode, cliente = null) => {
    setModal({ open: true, mode, cliente });
  };

  const closeModal = () => {
    setModal({ open: false, mode: 'view', cliente: null });
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <div className="max-w-[1280px] py-8 min-h-dvh h-full flex flex-col justify-start items-center mx-auto gap-6 px-8">
      <h1 className="text-3xl font-medium">Gerenciamento de Clientes</h1>
      <div className="flex flex-row flex-nowrap gap-4 justify-center items-center">
        <FiltroClientes
          filtros={filtros}
          setFiltros={setFiltros}
          onSearch={() => fetchClientes(filtros)}
        />
        <button onClick={() => openModal('create')} className="p-2 bg-neutral-200 border border-neutral-300 rounded-md font-medium text-base h-fit hover:bg-neutral-300 transition-all">
          Novo
        </button>
      </div>
      <ClientesTable
        clientes={clientes}
        openModal={openModal}
        refreshClientes={() => fetchClientes(filtros)}
      />
      {modal.open && (
        <ClienteModal
          mode={modal.mode}
          cliente={modal.cliente}
          closeModal={closeModal}
          refreshClientes={() => fetchClientes(filtros)}
        />
      )}
    </div>
  );
};

export default ClientesPage;
