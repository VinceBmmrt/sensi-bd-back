// Importation du module messageController
const { messageDatamapper } = require('../datamappers');

// Objet: regroupe tous les controleurs des messages
const messageController = {
  // Méthode pour récupérer tous les messages liés à un post entre deux utilisateurs
  async getMessagesByPostAndUser(req, res) {
    // L'ID du destinataire est passé en paramètre dans l'URL
    const { postId, userId: receiverId } = req.params;
    // L'ID de l'expéditeur est récupéré depuis la session ou le token JWT
    const senderId = req.user.id;
    // Appel de findAll pour obtenir tous les messages
    const messages = await messageDatamapper.findAll(postId, senderId, receiverId);
    // Envoi de la réponse au format JSON avec les messages
    res.json(messages);
  },
  // Méthode pour créer un message
  async addMessage(req, res) {
    // L'ID du destinataire est passé en paramètre dans l'URL
    const { postId, userId: receiverId } = req.params;
    // L'ID de l'expéditeur est récupéré depuis la session ou le token JWT
    const senderId = req.user.id;
    // Création d'un message
    const { content } = req.body;
    const message = await messageDatamapper.add(postId, senderId, receiverId, content);
    // Envoi de la réponse au format JSON avec le message
    res.json(message);
  },
};

// Exportation du controleur des messages
module.exports = messageController;
