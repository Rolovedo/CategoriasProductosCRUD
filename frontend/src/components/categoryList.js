import React, { useEffect, useState } from 'react';
import { getCategories, deleteCategory, updateCategory } from '../services/categoryService';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
      deleteCategory(id).then(() => {
        setCategories(categories.filter(cat => cat.id !== id));
      });
    }
  };

  const handleEdit = (cat) => {
    const newName = prompt('Nuevo nombre de la categoría:', cat.name);
    if (!newName) return;
    updateCategory(cat.id, { name: newName }).then(() => {
      setCategories(categories.map(c =>
        c.id === cat.id ? { ...c, name: newName } : c
      ));
    });
  };

  return (
    <div>
      <h2>Categorías</h2>
      <ul className="list-group">
        {categories.map(cat => (
          <li key={cat.id} className="list-group-item d-flex justify-content-between align-items-center">
            {cat.name}
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => handleEdit(cat)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(cat.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
