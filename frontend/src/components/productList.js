import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../services/productService';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      setProducts(products.filter(p => p.id !== id));
    });
  };

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - {p.category_name}
            <button onClick={() => handleDelete(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
