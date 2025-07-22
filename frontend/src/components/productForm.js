import React, { useState, useEffect } from 'react';
import { createProduct } from '../services/productService';
import { getCategories } from '../services/categoryService';

//componente para crear un producto
export default function ProductForm() {
  const [name, setName] = useState(''); //Estado para el nombre
  const [description, setDesc] = useState(''); //Estado para la descripcion
  const [price, setPrice] = useState(''); //Estado para el precio
  const [category_id, setCategory] = useState(''); //Estado para la categoria seleccionada
  const [categories, setCategories] = useState([]); //Estado para la lista de categorias

  useEffect(() => {
    getCategories().then(res => setCategories(res.data)); //carga las categorias al iniciar
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); //Evita que la pagina se recargue
    createProduct({ name, description, price, category_id }).then(() => {
      alert('Producto creado'); //Muestra mensaje al crear
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
        <label className="form-label">Descripcion</label>
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
        <label className="form-label">Categoria</label>
        <select
          className="form-select"
          value={category_id}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Seleccione categoria</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary" type="submit">Guardar</button>
    </form>
  );
}
