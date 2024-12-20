import React, { useState, useEffect } from 'react';
import ConfirmDelete from "../ConfirmDelete/index.jsx";

const ClientesTable = ({ clientes = [], openModal,refreshClientes }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [targetCliente, setTargetCliente] = useState(null);
  const [loading, setLoading] = useState(true);

  const styles = {
    table: 'min-w-full bg-white border-none !rounded-2xl',
    th: 'py-2 px-4 border-b border-neutral-200 text-left text-neutral-600',
    td: 'py-2 px-4 text-neutral-800',
    row: 'even:bg-neutral-50 !last:rounded-b-2xl',
    button: 'p-2 bg-neutral-200 border w-16 border-neutral-300 rounded-md font-medium text-base h-fit hover:bg-neutral-300 transition-all',
    skeleton: 'h-4 bg-neutral-200 rounded w-full mb-2',
  };

  useEffect(() => {
    if (clientes && clientes.length > 0) {
      console.log('Clientes carregados:', clientes);
      setLoading(false);
    } else {
      setLoading(false);
    }

  }, [clientes]);

  const handleOpenDeleteDialog = (cliente) => {
    setTargetCliente(cliente);
    setOpenDeleteDialog(true);
  }

  const dismissDeleteDialog = () => {
    setTargetCliente(null);
    setOpenDeleteDialog(false);
  }

  return (
    <>
      {loading ? (
        <div>
          <div className={styles.skeleton}></div>
          <div className={styles.skeleton}></div>
          <div className={styles.skeleton}></div>
        </div>
      ) : (
        <table className="min-w-full bg-white border-none !rounded-2xl">
          <thead className="bg-neutral-300">
          <tr className="!rounded-t-2xl">
            <th className={styles.th}>Código</th>
            <th className={styles.th}>Nome</th>
            <th className={styles.th}>Cidade</th>
            <th className={styles.th}>CEP</th>
            <th className={`${styles.th} text-center`}>Ações</th>
          </tr>
          </thead>
          <tbody>
          {Array.isArray(clientes) && clientes.length > 0 ? (
            clientes.map((cliente) => (
              <tr className={styles.row} key={cliente.idUsuario}>
                <td className={styles.td}>{cliente.Codigo}</td>
                <td className={styles.td}>{cliente.Nome}</td>
                <td className={styles.td}>{cliente.Cidade}</td>
                <td className={styles.td}>{cliente.CEP}</td>
                <td className={`${styles.td} flex flex-row gap-2 justify-center`}>
                  <button
                    className={styles.button}
                    onClick={() => openModal('view', cliente)}
                  >
                    Ver
                  </button>
                  <button
                    className={styles.button}
                    onClick={() => openModal('edit', cliente)}
                  >
                    Editar
                  </button>
                  <button
                    className={styles.button}
                    onClick={() => handleOpenDeleteDialog(cliente)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-center text-neutral-500 py-4"
              >
                Nenhum cliente encontrado.
              </td>
            </tr>
          )}
          </tbody>
        </table>
      )}
      {openDeleteDialog && (<ConfirmDelete cliente={targetCliente} closeDialog={() => dismissDeleteDialog()} refreshClientes={refreshClientes}/>)}
    </>
  );
};

export default ClientesTable;
