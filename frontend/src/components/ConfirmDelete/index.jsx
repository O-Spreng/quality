import React from 'react';
import axios from 'axios';

const API_ENDPOINT = import.meta.env.VITE_ENDPOINT_API;


function ConfirmDelete({ cliente, closeDialog, refreshClientes }) {
  const styles = {
    button: 'p-2 bg-neutral-200 border border-neutral-300 rounded-md font-medium text-base h-fit hover:bg-neutral-300 transition-all',
    confirm: 'p-2 bg-red-200 text-red-900 border border-red-900 rounded-md font-medium text-base h-fit hover:bg-red-300 transition-all',
  }

  async function handleDeleteConfirm() {
    try {
      await axios.delete(`${API_ENDPOINT}/api/clientes/${cliente.id}`);
      closeDialog();
      refreshClientes();
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
    }
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center transition-colors bg-black/20" onClick={closeDialog}>
      <div
        className="bg-neutral-100 mx-auto w-fit h-fit py-4 px-8 rounded-xl flex flex-col items-center justify-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">Tem certeza que deseja excluir este cliente?</h3>
          <p className="textl-xl font-thin">Esta ação não poderá ser desfeita.</p>
        </div>

        <div className="flex flex-row flex-nowrap justify-center gap-4">
          <button className={styles.confirm} onClick={handleDeleteConfirm}>Excluir</button>
          <button className={styles.button} onClick={closeDialog}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
