// Importation du postDatamapper
const { postDatamapper } = require('../datamappers');
// Importation du module debug
const debug = require('debug')('controller:post');

// Objet: regroupe tous les controleurs des posts
const postController = {
  // Méthode: récupérer tous les posts
  async getAllPosts(_,res){
    // Récupération de tous les posts
    const posts = await postDatamapper.findAll();
    // Envoi de la réponse au format JSON
    res.json(Posts);
  },
};

// Exportation du controleur des posts
module.exports = postController;