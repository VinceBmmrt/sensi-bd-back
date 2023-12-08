// Importation du module debug
const express = require('express');
// Importation du postRouter
const postRouter = require('./post');
const userRouter = require('./user');
const categoryRouter = require('./category');

// Création du router
const router = express.Router();

// Définition des routes
router.use('/posts', postRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);

// Exportation du router
module.exports = router;
