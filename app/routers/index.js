// Importation du module debug
const express = require('express');
// Importation du postRouter
const postRouter = require('./post');

// Création du router
const router = express.Router();

// Définition des routes
router.use('/posts', postRouter);

// Exportation du router
module.exports = router;