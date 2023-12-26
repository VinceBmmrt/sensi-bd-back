// Importation du module express
const express = require('express');
// Importation du controleur conditionController
const { conditionController } = require('../controllers');
// Création du router
const router = express.Router();

// Définition des routes
/**
 * Condition types
 * @typedef {object} Condition
 * @property {number} id - id de la condition
 * @property {string} name - nom de la condition
 */

/**
 * GET /conditions
 * @summary retourne une liste de conditions
 * @return {Condition} 200 - Success response
 */
router.get('/', conditionController.getAllConditions);

/**
 * Condition types
 * @typedef {object} Condition
 * @property {number} id - id de la condition
 * @property {string} name - nom de la condition
 */

/**
 * GET /conditions/{id}
 * @summary retourne une condition en fonction d'un id
 * @param {number} id.path.required - l'id de la condition
 * @return {object} 200 - Success response
 */
router.get('/:id', conditionController.getConditionById);

// Exportation du router
module.exports = router;
