// Importation du module express
const express = require('express');
// Importation du controleur userController
const { userController } = require('../controllers');
// Importation de controllerHandler
const controllerHandler = require('../controllers/helpers/controllerHandler');
// Importation de ApiError
const ApiError = require('../errors/ApiError');
// Importation de errorHandler
const errorHandler = require('../controllers/helpers/errorHandler');
// Import du middleware JWT
const auth = require('../utils/authToken');

// Création du router
const router = express.Router();

// Définition des routes
router.get('/', controllerHandler(userController.getAllUsers));
router.get('/:id', controllerHandler(userController.getUserById));
router.post('/', controllerHandler(userController.addUser));
router.login('/login', controllerHandler(userController.loginUser));

router.patch('/:id', auth, controllerHandler(userController.updateUser));
router.delete('/:id', auth, controllerHandler(userController.deleteUser));

router.patch('/:id/address', auth, controllerHandler(userController.updateUserAddress));

// Middleware pour gérer les routes qui ne correspondent à aucune route définie ci-dessus.
router.use(() => {
  throw new ApiError('Resource not found', 404);
});

// Middleware pour la gestion des erreurs.
router.use(errorHandler);

// Exportation du router
module.exports = router;
