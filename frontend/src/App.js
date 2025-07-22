import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import CategoryList from './components/categoryList';
import CategoryForm from './components/categoryForm';
import ProductList from './components/productList';
import ProductForm from './components/productForm';

//Componente principal de la aplicacion
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/crear-producto" element={<ProductForm />} />
          <Route path="/categorias" element={<CategoryList />} />
          <Route path="/crear-categoria" element={<CategoryForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
