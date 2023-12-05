// Importation du module express
const express = require('express');
// Importation du controleur postController
const { postController } = require('../controllers');
// Création du router
const router = express.Router();

// Définition des routes
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.get('/category/:id', postController.getPostByCategory);
router.get('/audience/:id', postController.getPostByAudience);
router.get('/condition/:id', postController.getPostByCondition);

router.post('/', postController.addPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

// Exportation du router
module.exports = router;
