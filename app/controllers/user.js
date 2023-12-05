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
  async getUserById(req, res) {
    // Récupération d'un utilisateur
    const user = await userDatamapper.findById(req.params.id);
    // Envoi de la réponse au format JSON
    res.json(user);
  },
  // Méthode: Ajout d'un utilisateur
  async addUser(req, res) {
    // Envoi d'un utilisateur
    const addressId = await userDatamapper.addUserAddress(req.body);
    const newUser = await userDatamapper.addNewUser(req.body, addressId);
    // Envoi du body en format JSON
    res.json(newUser);
  },
};

// Exportation du controleur des posts
module.exports = userController;
