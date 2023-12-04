// Importation du module debug
const express = require('express');
// Importation du postRouter
const postRouter = require('./post');
const userRouter = require('./user');

// Création du router
const router = express.Router();

// Définition des routes
router.use('/posts', postRouter);
router.use('/users', userRouter);

// Exportation du router
module.exports = router;
