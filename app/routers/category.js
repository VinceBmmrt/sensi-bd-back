// Importation du module express
const express = require('express');
// Importation du controleur categoryController
const { categoryController } = require('../controllers');
// Création du router
const router = express.Router();

// Définition des routes
/**
 * Category types
 * @typedef {object} Category
 * @property {number} id - id de la catégorie
 * @property {string} name - nom de la catégorie
 */

/**
 * GET /categories
 * @summary retourne une liste de catégories
 * @return {Category} 200 - Success response
 */
router.get('/', categoryController.getAllCategories);

/**
 * Category types
 * @typedef {object} Category
 * @property {number} id - id de la catégorie
 * @property {string} name - nom de la catégorie
 */

/**
 * GET /categories/{id}
 * @summary retourne une catégorie en fonction d'un id
 * @param {number} id.path.required - l'id de la catégorie
 * @return {object} 200 - Success response
 */
router.get('/:id', categoryController.getCategoryById);

// Exportation du router
module.exports = router;
