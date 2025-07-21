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
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Crear</button>
    </form>
  );
}