// Importation du postDatamapper
const { postDatamapper } = require('../datamappers');
// Importation du module debug
// const debug = require('debug')('controller:post');

// Objet: regroupe tous les controleurs des posts
const postController = {
  // Méthode: récupérer tous les posts
  async getAllPosts(_, res) {
    // Récupération de tous les posts
    const posts = await postDatamapper.findAll();
    // Envoi de la réponse au format JSON
    res.json(posts);
  },
  // Méthode: récupérer un post par son id
  async getPostById(req, res) {
    // Récupération de l'id du post
    const posts = await postDatamapper.findById(req.params.id);
    // Envoi de la réponse au format JSON
    res.json(posts);
  },
  // Méthode: récupérer un post par sa catégorie
  async getPostByCategory(req, res) {
    // Récupération de l'id de la catégorie
    const posts = await postDatamapper.findByCategory(req.params.id);
    // Envoi de la réponse au format JSON
    res.json(posts);
  },
  // Méthode: récupérer tous les posts par audience
  async getPostByAudience(req, res) {
    // Récupération de l'id de l'audience
    const posts = await postDatamapper.findByAudience(req.params.id);
    // Envoi de la réponse au format JSON
    res.json(posts);
  },
  // Méthode: créer un post
  async addPost(req, res) {
    // Création d'un post
    const post = await postDatamapper.add(req.body);
    // Envoi de la réponse au format JSON
    res.json(post);
  },
  // Méthode: modifier un post selon son id
  async updatePost(req, res) {
    // Modification d'un post
    const post = await postDatamapper.update(req.params.id, req.body);
    // Envoi de la réponse au format JSON
    res.json(post);
  },
};

// Exportation du controleur des posts
module.exports = postController;
