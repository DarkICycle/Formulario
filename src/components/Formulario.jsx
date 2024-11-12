import React, { useState } from 'react';

export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [lista, setLista] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Nuevo estado para el índice de edición

  const guardar = (e) => {
    e.preventDefault();
    if (!nombre) return alert('Falta el nombre');
    if (!apellido) return alert('Falta el apellido');
  
    if (editIndex !== null) {
      // Editar el elemento en la lista
      const nuevaLista = [...lista];
      nuevaLista[editIndex] = { ...nuevaLista[editIndex], nombre, apellido };
      setLista(nuevaLista);
      setEditIndex(null);
    } else {
      // Agregar un nuevo elemento con el estado eliminado: false
      setLista([...lista, { nombre, apellido, eliminado: false }]);
    }
  
    e.target.reset();
    setNombre('');
    setApellido('');
  };
  
  const marcarParaEliminar = (index) => {
    const nuevaLista = [...lista];
    nuevaLista[index].eliminado = !nuevaLista[index].eliminado;
    setLista(nuevaLista);
  };
  
  const confirmarEliminacion = () => {
    setLista(lista.filter((user) => !user.eliminado));
  };
  

  const eliminar = (index) => {
    const nuevaLista = [...lista];
    nuevaLista[index].eliminado = true; // Marcar como eliminado
    setLista(nuevaLista);
  };
  

  const editar = (index) => {
    // Cargar los valores de nombre y apellido en los campos de entrada para editar
    setNombre(lista[index].nombre);
    setApellido(lista[index].apellido);
    setEditIndex(index); // Establecer el índice de edición
  };

  const vaciarLista = () => {
    if (window.confirm("¿Estás seguro de que quieres vaciar la lista?")) {
      setLista([]);
    }
  };
  
  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={guardar}>
        <input
          type="text"
          placeholder="Ingrese su Nombre"
          className="form-control mb-3"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ingrese su Apellido"
          className="form-control mb-3"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />

        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            {editIndex !== null ? 'Actualizar' : 'Registrar'}
          </button>
          <button className="btn btn-danger" type="button" onClick={vaciarLista}>
            Vaciar Lista
          </button>
        </div>
      </form>

      <ul>
        {lista.map((user, index) => (
          <li key={index} style={{ textDecoration: user.eliminado ? 'line-through' : 'none' }}>
            {user.nombre} {user.apellido}
            <button className="btn btn-secondary ms-2" onClick={() => marcarParaEliminar(index)}>
              {user.eliminado ? 'Cancelar Eliminación' : 'Seleccionar para Eliminar'}
            </button>
            {!user.eliminado && (
              <button className="btn btn-warning ms-2" onClick={() => editar(index)}>
                Editar
              </button>
            )}
          </li>
        ))}
      </ul>
      {lista.some((user) => user.eliminado) && (
        <button className="btn btn-danger mt-3" onClick={confirmarEliminacion}>
          Confirmar Eliminación
        </button>
      )}
    </div>
  );
};
