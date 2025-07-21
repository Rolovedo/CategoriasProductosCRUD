module.exports = (app) => {
  const controller = require('../controllers/category.controller');

  app.get('/categories', controller.getAllCategories);
  app.get('/categories/:id', controller.getCategoryById);
  app.post('/categories', controller.createCategory);
  app.put('/categories/:id', controller.updateCategory);
  app.delete('/categories/:id', controller.deleteCategory);
};
