// Importation du module express
const express = require('express');
// Importation du controleur postController
const { postController } = require('../controllers');
// Importation de controllerHandler
const controllerHandler = require('../controllers/helpers/controllerHandler');
// Importation de ApiError
const ApiError = require('../errors/ApiError');
// Importation de errorHandler
const errorHandler = require('../controllers/helpers/errorHandler');
// Création du router
const router = express.Router();

// Définition des routes
router.get('/', controllerHandler(postController.getAllPosts));
router.get('/:id', controllerHandler(postController.getPostById));
router.get('/category/:id', controllerHandler(postController.getPostByCategory));
router.get('/audience/:id', controllerHandler(postController.getPostByAudience));
router.get('/condition/:id', controllerHandler(postController.getPostByCondition));

router.post('/', controllerHandler(postController.addPost));
router.put('/:id', controllerHandler(postController.updatePost));
router.delete('/:id', controllerHandler(postController.deletePost));

// Middleware pour gérer les routes qui ne correspondent à aucune route définie ci-dessus.
router.use(() => {
  throw new ApiError('Resource not found', 404);
});

// Middleware pour la gestion des erreurs.
router.use(errorHandler);

// Exportation du router
module.exports = router;
