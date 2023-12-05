// Importation du controleur userController
const express = require('express');
const { userController } = require('../controllers');
// Importation du module express
// Création du router
const router = express.Router();

// Définition des routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.addUser);

// Exportation du router
module.exports = router;
