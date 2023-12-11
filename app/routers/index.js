// Importation du module debug
const express = require('express');
// Importation du postRouter
const postRouter = require('./post');
const userRouter = require('./user');
const categoryRouter = require('./category');
const audienceRouter = require('./audience');
const conditionRouter = require('./condition');

// Création du router
const router = express.Router();

// Définition des routes
router.use('/posts', postRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/audiences', audienceRouter);
router.use('/conditions', conditionRouter);

// Exportation du router
module.exports = router;
