// Importation du controleur postController
const {postController} = require('../controllers');
// Importation du module express
const express = require('express');
// Création du router
const router = express.Router();

// Définition des routes
router.get('/', postController.getAllPosts);

// Exportation du router
module.exports = router;