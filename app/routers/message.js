// Importation du module express
const express = require('express');
// Importation du controleur messageController
const { messageController } = require('../controllers');
// Importation de controllerHandler
const controllerHandler = require('../controllers/helpers/controllerHandler');
// Importation de ApiError
const ApiError = require('../errors/ApiError');
// Importation de errorHandler
const errorHandler = require('../controllers/helpers/errorHandler');
// Création du router
const router = express.Router();
// Import du middleware JWT
const auth = require('../utils/authToken');

// Définition des routes
/**
 * Message types
 * @typedef {object} Message
 * @property {number} id - id du message
 * @property {string} content - contenu du message
 * @property {number} post_id - id de l'annonce
 * @property {number} user_id - id de l'utilisateur
 */

/**
 * GET /messages
 * @summary retourne une liste de messages
 * @param {number} postId.path.required - id de l'annonce
 * @param {number} userId.path.required - id de l'utilisateur
 * @return {Message} 200 - Success response
 */
router.get('/:postId/:userId', auth, controllerHandler(messageController.getMessagesByPostAndUser));

/**
 * POST /messages
 * @summary ajoute un message à une annonce
 * @param {number} postId.path.required - id de l'annonce
 * @param {number} userId.path.required - id de l'utilisateur
 * @param {string} content.body.required - contenu du message
 * @return {Message} 200 - Success response
 */
router.post('/:postId/:userId', auth, controllerHandler(messageController.addMessage));

/**
 * GET /messages/conversations
 * @summary retourne toutes les conversations d'un utilisateur
 * @security JWT
 * @return {conversation} 200 - Liste des conversations de l'utilisateur authentifié
 */
router.get('/conversations', auth, controllerHandler(messageController.getConversations));

// Middleware pour gérer les routes qui ne correspondent à aucune route définie ci-dessus.
router.use(() => {
  throw new ApiError('Resource not found', 404);
});

// Middleware pour la gestion des erreurs.
router.use(errorHandler);

// Exportation du router
module.exports = router;
