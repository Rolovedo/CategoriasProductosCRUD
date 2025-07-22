import React, { useState, useEffect } from 'react';
import { createProduct } from '../services/productService';
import { getCategories } from '../services/categoryService';

export default function ProductForm() {
  const [name, setName] = useState('');
  const [description, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [category_id, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(res => setCategories(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct({ name, description, price, category_id }).then(() => {
      alert('Producto creado');
      setName('');
      setDesc('');
      setPrice('');
      setCategory('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Producto</h2>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Precio</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Categoría</label>
        <select
          className="form-select"
          value={category_id}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Seleccione categoría</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary" type="submit">Guardar</button>
    </form>
  );
}
