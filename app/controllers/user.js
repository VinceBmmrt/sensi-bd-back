// Importation du postDatamapper
const { userDatamapper } = require('../datamappers');
// Importation du module debug
// const debug = require('debug')('controller:post');

// Objet: regroupe tous les controleurs des posts
const userController = {
  // Méthode: récupérer tous les utilisateurs
  async getAllUsers(_, res) {
    // Récupération de tous les utilisateurs
    const users = await userDatamapper.findAll();
    // Envoi de la réponse au format JSON
    res.json(users);
  },
  // Méthode: récupérer un utilisateur
  async getUserById(_, res) {
    // Récupération d'un utilisateur
    const user = await userDatamapper.findById();
    // Envoi de la réponse au format JSON
    res.json(user);
  },
};

// Exportation du controleur des posts
module.exports = userController;
