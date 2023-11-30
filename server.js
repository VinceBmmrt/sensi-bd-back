/***************************************/
/*** Fichier de lancement du serveur ***/
/***************************************/
require('dotenv').config();
// Importation du module path
const path = require('path');
// Importation du module express
const express = require('express');

// Définition du port d'écoute du serveur
const PORT = process.env.PORT ?? 5000; 

// Création de l'application express
const app = express();

// Autorise la réception de données au format (Content-type) JSON
app.use(express.json());

// Définition du dossier public
app.use(express.static('public'));
// Autorise la réception de données au format (Content-type) x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Je lance l'écoute de mon serveur
app.listen(PORT,()=>{
  console.log(`Serveur démarré http://localhost:${PORT}`);
});