const postController = require('./post');
const userController = require('./user');
const categoryController = require('./category');
const audienceController = require('./audience');

// Exportation du router et des controleurs
module.exports = {
  postController, userController, categoryController, audienceController,
};
