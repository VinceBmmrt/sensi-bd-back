// Importation du controleur postController
const express = require('express');
const { postController } = require('../controllers');
// Importation du module express
// Création du router
const router = express.Router();

// Définition des routes
router.get('/annonces', postController.getAllPosts);

// Exportation du router
module.exports = router;
