import React, { useState } from 'react';
import { createCategory } from '../services/categoryService';

export default function CategoryForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory({ name }).then(() => {
      alert('Categoría creada');
      setName('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Categoría</h2>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Crear
      </button>
    </form>
  );
}