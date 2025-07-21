const db = require('../config/db');

// Obtener todos los productos
exports.getAllProducts = (req, res) => {
  const sql = `
    SELECT products.*, categories.name AS category_name
    FROM products
    JOIN categories ON products.category_id = categories.id
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Obtener un producto por ID
exports.getProductById = (req, res) => {
  const sql = 'SELECT * FROM products WHERE id = ?';
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ msg: 'Producto no encontrado' });
    res.json(results[0]);
  });
};

// Crear nuevo producto
exports.createProduct = (req, res) => {
  const { name, description, price, category_id } = req.body;
  const sql = 'INSERT INTO products (name, description, price, category_id) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, description, price, category_id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, name, description, price, category_id });
  });
};

// Actualizar producto
exports.updateProduct = (req, res) => {
  const { name, description, price, category_id } = req.body;
  const sql = 'UPDATE products SET name = ?, description = ?, price = ?, category_id = ? WHERE id = ?';
  db.query(sql, [name, description, price, category_id, req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ msg: 'Producto actualizado' });
  });
};

// Eliminar producto
exports.deleteProduct = (req, res) => {
  const sql = 'DELETE FROM products WHERE id = ?';
  db.query(sql, [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ msg: 'Producto eliminado' });
  });
};