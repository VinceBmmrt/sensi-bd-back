// Importation du module debug
const express = require('express');
// Importation du postRouter
const postRouter = require('./post');
const userRouter = require('./user');
const categoryRouter = require('./category');
const audienceRouter = require('./audience');

// Création du router
const router = express.Router();

// Définition des routes
router.use('/posts', postRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/audiences', audienceRouter);

// Exportation du router
module.exports = router;
