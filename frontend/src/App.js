import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryList from './components/categoryList';
import CategoryForm from './components/categoryForm';
import ProductList from './components/productList';
import ProductForm from './components/productForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/crear-producto" element={<ProductForm />} />
        <Route path="/categorias" element={<CategoryList />} />
        <Route path="/crear-categoria" element={<CategoryForm />} />
      </Routes>
    </Router>
  );
}

export default App;
