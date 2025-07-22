import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">CRUD Productos</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Productos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/crear-producto">Crear Producto</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categorias">Categorías</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/crear-categoria">Crear Categoría</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}