const db = require('../config/db');

//obtener todas las categorias
exports.getAllCategories = (req, res) => {
  db.query('SELECT * FROM categories', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

//btener categoria por ID
exports.getCategoryById = (req, res) => {
  db.query('SELECT * FROM categories WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ msg: 'Categoria no encontrada' });
    res.json(results[0]);
  });
};

//Crear nueva categoria
exports.createCategory = (req, res) => {
  const { name } = req.body;
  db.query('INSERT INTO categories (name) VALUES (?)', [name], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, name });
  });
};

//Actualizar categoria
exports.updateCategory = (req, res) => {
  const { name } = req.body;
  db.query('UPDATE categories SET name = ? WHERE id = ?', [name, req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ msg: 'Categoria actualizada' });
  });
};

//Eliminar categoria
exports.deleteCategory = (req, res) => {
  db.query('DELETE FROM categories WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ msg: 'Categoria eliminada' });
  });
};