const postController = require('./post');
const userController = require('./user');
const categoryController = require('./category');

// Exportation du router et des controleurs
module.exports = {
  postController, userController, categoryController,
};
