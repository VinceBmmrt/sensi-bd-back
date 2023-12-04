// Importation du controleur postController
const express = require('express');
const { postController } = require('../controllers');
// Importation du module express
// Création du router
const router = express.Router();

// Définition des routes
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.get('/category/:id', postController.getPostByCategory);

router.post('/', postController.addPost);
router.put('/:id', postController.updatePost);

// Exportation du router
module.exports = router;
