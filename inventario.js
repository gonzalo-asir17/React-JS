import React, { useState } from 'react';

function Medicamentos() {
  const [medicamento, setMedicamento] = useState({
    nombre: '',
    codigo: '',
    cantidad: '',
    precio: '',
    fecha: ''
  });
  const [listaMedicamentos, setListaMedicamentos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicamento({
      ...medicamento,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaMedicamentos([...listaMedicamentos, medicamento]);
    setMedicamento({ nombre: '', codigo: '', cantidad: '', precio: '', fecha: '' });
  };

  return (
    <div>
      <h1>Medicamentos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={medicamento.nombre}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="codigo"
          value={medicamento.codigo}
          onChange={handleChange}
          placeholder="Código"
        />
        <input
          type="number"
          name="cantidad"
          value={medicamento.cantidad}
          onChange={handleChange}
          placeholder="Cantidad"
        />
        <input
          type="number"
          name="precio"
          value={medicamento.precio}
          onChange={handleChange}
          placeholder="Precio"
        />
        <input
          type="date"
          name="fecha"
          value={medicamento.fecha}
          onChange={handleChange}
        />
        <button type="submit">Añadir</button>
      </form>

      <h2>Lista de Medicamentos</h2>
      <ul>
        {listaMedicamentos.map((med, index) => (
          <li key={index}>
            {med.nombre} - {med.codigo} - {med.cantidad} - {med.precio} - {med.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Medicamentos;
