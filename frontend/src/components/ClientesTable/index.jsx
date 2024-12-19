import React from 'react';

const ClientesTable = ({ clientes, openModal }) => {
  const styles = {
    table: 'min-w-full bg-white border-none !rounded-2xl',
    th: 'py-2 px-4 border-b border-neutral-200 text-left text-neutral-600',
    td: 'py-2 px-4 text-neutral-800',
    row: 'even:bg-neutral-50 !last:rounded-b-2xl',
    button: 'p-2 bg-neutral-200 border border-neutral-300 rounded-md font-medium text-base h-fit hover:bg-neutral-300 transition-all',
  };

  return (
    <table className="min-w-full bg-white border-none !rounded-2xl">
      <thead className="bg-neutral-300">
        <tr className="!rounded-t-2xl">
          <th className={styles.th}>Código</th>
          <th className={styles.th}>Nome</th>
          <th className={styles.th}>Cidade</th>
          <th className={styles.th}>CEP</th>
          <th className={styles.th}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {clientes && clientes.map((cliente) => (
          <tr className={styles.row} key={cliente.id}>
            <td className={styles.td}>{cliente.Codigo}</td>
            <td className={styles.td}>{cliente.Nome}</td>
            <td className={styles.td}>{cliente.Cidade}</td>
            <td className={styles.td}>{cliente.CEP}</td>
            <td className={styles.td}>
              <button className={styles.button} onClick={() => openModal('view', cliente)}>Ver</button>
              <button className={styles.button} onClick={() => openModal('edit', cliente)}>Editar</button>
              <button className={styles.button} onClick={() => openModal('delete', cliente)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientesTable;
