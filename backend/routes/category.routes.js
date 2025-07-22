//rutas para las categorias
module.exports = (app) => {
  const controller = require('../controllers/category.controller');

  //obtener todas las categorias
  app.get('/categories', controller.getAllCategories);

  //obtener una categoria por ID
  app.get('/categories/:id', controller.getCategoryById);

  //Crear una nueva categoria
  app.post('/categories', controller.createCategory);

  //Actualizar una categoria existente
  app.put('/categories/:id', controller.updateCategory);

  //Eliminar una categoria
  app.delete('/categories/:id', controller.deleteCategory);
};
