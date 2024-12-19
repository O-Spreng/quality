import React from 'react';

const FiltroClientes = ({ filtros, setFiltros, onSearch }) => {
  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const styles = {
    input: 'p-2 border border-neutral-300 rounded-md font-medium text-base',
    button: 'p-2 bg-neutral-200 border border-neutral-300 rounded-md font-medium text-base h-fit hover:bg-neutral-300 transition-all',
  };

  return (
    <div className="flex flex-row flex-nowrap bg-neutral-50 px-4 py-2 gap-2 rounded-lg">
      <input
        type="text"
        name="Codigo"
        placeholder="Código"
        value={filtros.Codigo}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="text"
        name="Nome"
        placeholder="Nome"
        value={filtros.Nome}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="text"
        name="Cidade"
        placeholder="Cidade"
        value={filtros.Cidade}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="text"
        name="CEP"
        placeholder="CEP"
        value={filtros.CEP}
        onChange={handleChange}
        className={styles.input}
      />
      <button className={styles.button} onClick={onSearch}>
        Buscar
      </button>
    </div>
  );
};

export default FiltroClientes;
