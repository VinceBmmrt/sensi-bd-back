// Importation des controleurs
const postController = require('./post');
// Importation du module express
const express = require('express');
// Création du router
const router = express.Router();

// Exportation du router et des controleurs
module.exports = {
    postController,
    router
}