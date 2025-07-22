import React, { useEffect, useState } from 'react';
import { getCategories, deleteCategory, updateCategory } from '../services/categoryService';

//Componente para listar categorias
export default function CategoryList() {
  const [categories, setCategories] = useState([]); //Estado para las categorias

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data)); //carga las categorias al iniciar
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Estas seguro de que deseas eliminar esta categoria?')) { //mensaje de confirmacion
      deleteCategory(id).then(() => {
        setCategories(categories.filter(cat => cat.id !== id)); //elimina la categoria del estado
      });
    }
  };

  const handleEdit = (cat) => {
    const newName = prompt('Nuevo nombre de la categoria:', cat.name); //pide el nuevo nombre
    if (!newName) return;
    updateCategory(cat.id, { name: newName }).then(() => {
      setCategories(categories.map(c =>
        c.id === cat.id ? { ...c, name: newName } : c //actualiza el nombre en el estado
      ));
    });
  };

  return (
    <div>
      <h2>Categorias</h2>
      <ul className="list-group">
        {categories.map(cat => (
          <li key={cat.id} className="list-group-item d-flex justify-content-between align-items-center">
            {cat.name}
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => handleEdit(cat)} //boton para editar
              >
                Editar
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(cat.id)} //boton para eliminar
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
