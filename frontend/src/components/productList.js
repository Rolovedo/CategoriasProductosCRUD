import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct, updateProduct } from '../services/productService';
import { getCategories } from '../services/categoryService';

//Componente para listar productos
export default function ProductList() {
  const [products, setProducts] = useState([]); //Estado para los productos
  const [categories, setCategories] = useState([]); //Estado para las categorias

  useEffect(() => {
    getProducts().then(res => setProducts(res.data)); //Carga los productos al iniciar
    getCategories().then(res => setCategories(res.data)); //Carga las categorias al iniciar
  }, []);

  const handleDelete = id => {
    if (window.confirm('Estas seguro de que deseas eliminar este producto?')) { //Mensaje de confirmacion
      deleteProduct(id).then(() => setProducts(products.filter(p => p.id !== id))); //Elimina el producto del estado
    }
  };

  const handleEdit = id => {
    const product = products.find(p => p.id === id); //busca el producto a editar
    if (!product) return;

    const newName = prompt('Nuevo nombre del producto:', product.name); //pide el nuevo nombre
    if (!newName) return;

    const newDescription = prompt('Nueva descripcion:', product.description); //Pide la nueva descripcion
    if (newDescription === null) return;

    const newPrice = prompt('Nuevo precio:', product.price); //Pide el nuevo precio
    if (newPrice === null || isNaN(newPrice)) return;

    //Seleccion de categoria por prompt simple
    const categoryOptions = categories.map(cat => `${cat.id}: ${cat.name}`).join('\n');
    const newCategoryId = prompt(
      `ID de nueva categoria:\n${categoryOptions}`,
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
