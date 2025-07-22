import React, { useState } from 'react';
import { createCategory } from '../services/categoryService';

//Formulario para crear una nueva categoria
export default function CategoryForm() {
  const [name, setName] = useState(''); //estado para el nombre de la categoria

  const handleSubmit = (e) => {
    e.preventDefault(); //evita que la pagina se recargue al enviar el formulario
    createCategory({ name }).then(() => {
      alert('Categoria creada'); //Muestra mensaje cuando se crea la categoria
      setName(''); //Limpia el campo de nombre
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Categoria</h2>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)} //Actualiza el estado con lo que escribe el usuario
          required
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Crear
      </button>
    </form>
  );
}