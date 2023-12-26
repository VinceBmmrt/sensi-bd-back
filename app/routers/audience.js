// Importation du module express
const express = require('express');
// Importation du controleur audienceController
const { audienceController } = require('../controllers');
// Création du router
const router = express.Router();

// Définition des routes
/**
 * Audience types
 * @typedef {object} Audience
 * @property {number} id - id de l'audience
 * @property {string} name - nom de l'audience
 */

/**
 * GET /audiences
 * @summary retourne une liste d'audiences
 * @return {Audience} 200 - Success response
 */
router.get('/', audienceController.getAllAudiences);

// Exportation du router
module.exports = router;
