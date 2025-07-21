import React, { useEffect, useState } from 'react';
import { getCategories, deleteCategory } from '../services/categoryService';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteCategory(id).then(() => {
      setCategories(categories.filter(cat => cat.id !== id));
    });
  };

  return (
    <div>
      <h2>Categorías</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>
            {cat.name}
            <button onClick={() => handleDelete(cat.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
