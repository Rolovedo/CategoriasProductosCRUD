import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct, updateProduct } from '../services/productService';
import { getCategories } from '../services/categoryService';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
    getCategories().then(res => setCategories(res.data));
  }, []);

  const handleDelete = id => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      deleteProduct(id).then(() => setProducts(products.filter(p => p.id !== id)));
    }
  };

  const handleEdit = id => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const newName = prompt('Nuevo nombre del producto:', product.name);
    if (!newName) return;

    const newDescription = prompt('Nueva descripción:', product.description);
    if (newDescription === null) return;

    const newPrice = prompt('Nuevo precio:', product.price);
    if (newPrice === null || isNaN(newPrice)) return;

    // Selección de categoría por prompt simple
    const categoryOptions = categories.map(cat => `${cat.id}: ${cat.name}`).join('\n');
    const newCategoryId = prompt(
      `ID de nueva categoría:\n${categoryOptions}`,
      product.category_id
    );
    if (!newCategoryId || !categories.find(cat => String(cat.id) === String(newCategoryId))) return;

    updateProduct(id, {
      ...product,
      name: newName,
      description: newDescription,
      price: newPrice,
      category_id: newCategoryId
    }).then(() => {
      setProducts(products.map(p =>
        p.id === id
          ? { ...p, name: newName, description: newDescription, price: newPrice, category_id: newCategoryId }
          : p
      ));
    });
  };

  return (
    <div>
      <h2>Productos</h2>
      <ul className="list-group">
        {products.map(p => (
          <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{p.name}</strong> | <span className="text-muted">{p.category_name}</span> | ${p.price}
              <br />
              <span>{p.description}</span>
            </div>
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(p.id)}>
                Editar
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p.id)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
