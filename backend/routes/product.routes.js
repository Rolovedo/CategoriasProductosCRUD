module.exports = (app) => {
  const controller = require('../controllers/product.controller');

  app.get('/products', controller.getAllProducts);
  app.get('/products/:id', controller.getProductById);
  app.post('/products', controller.createProduct);
  app.put('/products/:id', controller.updateProduct);
  app.delete('/products/:id', controller.deleteProduct);
};
