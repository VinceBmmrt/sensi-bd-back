// Importation du module debug
const debug = require('debug')('sensibd:user-controller');
// Importation du postDatamapper
const { userDatamapper } = require('../datamappers');

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
  // Méthode de mise à jour des info d'un utilisateur
  async updateUser(req, res) {
    const user = await userDatamapper.update(req.params.id, req.body);
    res.json(user);
  },
  // Méthode de suppression d'un utilisateur
  async deleteUser(req, res) {
    const user = await userDatamapper.delete(req.params.id);
    res.json(user);
  },
  // Méthode de mise à jour des info de l'adresse d'un utilisateur
  async updateUserAddress(req, res) {
    debug('req.body:', req.body);
    const userAddressId = await userDatamapper.findAddressId(req.params.id);
    debug('User Address ID:', userAddressId);
    const newUserAddress = await userDatamapper.updateAddress(userAddressId, req.body);
    res.json(newUserAddress);
  },
};

// Exportation du controleur des posts
module.exports = userController;
