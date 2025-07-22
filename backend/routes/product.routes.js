//definicion de las rutas para los productos
module.exports = (app) => {
  const controller = require('../controllers/product.controller');

  //obtener todos los productos
  app.get('/products', controller.getAllProducts);

  //obtener un producto por ID
  app.get('/products/:id', controller.getProductById);

  //crear un nuevo producto
  app.post('/products', controller.createProduct);

  //actualizar un producto existente
  app.put('/products/:id', controller.updateProduct);

  //eliminar un producto
  app.delete('/products/:id', controller.deleteProduct);
};
