// Importation du module express
const express = require('express');
// Importation du controleur messageController
const { messageController } = require('../controllers');
// Création du router
const router = express.Router();

// Définition des routes
router.get('/:postId/:userId', messageController.getMessagesByPostAndUser);
router.post('/:postId/:userId', messageController.addMessage);

// Exportation du router
module.exports = router;
