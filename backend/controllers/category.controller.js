const db = require('../config/db');

// Obtener todas las categorías
exports.getAllCategories = (req, res) => {
  db.query('SELECT * FROM categories', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Obtener categoría por ID
exports.getCategoryById = (req, res) => {
  db.query('SELECT * FROM categories WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ msg: 'Categoría no encontrada' });
    res.json(results[0]);
  });
};

// Crear nueva categoría
exports.createCategory = (req, res) => {
  const { name } = req.body;
  db.query('INSERT INTO categories (name) VALUES (?)', [name], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, name });
  });
};

// Actualizar categoría
exports.updateCategory = (req, res) => {
  const { name } = req.body;
  db.query('UPDATE categories SET name = ? WHERE id = ?', [name, req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ msg: 'Categoría actualizada' });
  });
};

// Eliminar categoría
exports.deleteCategory = (req, res) => {
  db.query('DELETE FROM categories WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ msg: 'Categoría eliminada' });
  });
};