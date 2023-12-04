// Importation du controleur userController
const express = require('express');
const { userController } = require('../controllers');
// Importation du module express
// Création du router
const router = express.Router();

// Définition des routes
router.get('/', userController.getAllUsers);

// Exportation du router
module.exports = router;
