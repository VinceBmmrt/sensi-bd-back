/** ************************************ */
/** * Fichier de lancement du serveur ** */
/** ************************************ */
// Importation du module CORS
const cors = require('cors');
// Importation du module dotenv
require('dotenv').config();
// Importation du module debug
const debug = require('debug')('sensibd:server');
// Importation du module path
// const path = require('path');
// Importation du module express
const express = require('express');

const f3 = require('fs');
const util = require('util');

const unlinkFile = util.promisify(f3.unlink);

/* Importation du module multer pour la gestion
des fichiers entrants dans les requêtes HTTP */
// eslint-disable-next-line import/no-extraneous-dependencies
const multer = require('multer');
/* Création d'une instance multer, configurée pour stocker
les fichiers téléchargés dans le dossier 'uploads/' */
const upload = multer({ dest: 'uploads/' });
// Importation des modules pour la gestion des fichiers sur S3
const { uploadFile, getFileStream } = require('./s3');
// Importation du router
const router = require('./app/routers');

// Définition du port d'écoute du serveur
const PORT = process.env.PORT ?? 5000;

// Création de l'application express
const app = express();

// Autorise la réception de données au format (Content-type) JSON
app.use(express.json());

// Autorise les requêtes cross-origin
app.use(cors(''));

// Route GET pour servir les images stockées sur S3.
// Utilise la clé fournie pour récupérer et renvoyer l'image
app.get('/images/:key', (req, res) => {
  // Récupération de la clé
  const { key } = req.params;
  // Récupération du stream de l'image
  const readStream = getFileStream(key);
  // Envoi du stream de l'image
  readStream.pipe(res);
});

// Route POST pour télécharger des images sur S3.
// Utilise multer pour gérer le fichier téléchargé et 'uploadFile' pour l'envoyer à S3
app.post('/images', upload.single('image'), async (req, res) => {
  // Accès au fichier téléchargé via la requête
  const { file } = req;
  debug(file);
  // Téléchargement du fichier sur S3
  const result = await uploadFile(file);
  // Suppression du fichier temporaire du dossier 'uploads/'
  await unlinkFile(file.path);
  debug(result);
  // Récupération de la description depuis le corps de la requête, avec une valeur par défaut
  const description = req.body.description ?? 'No description';
  // Envoi de la réponse contenant le chemin de l'image et la description
  res.send({ imagePath: `/images/${result.Key}`, description });
});

// Définition du dossier public
app.use(express.static('public'));
// Autorise la réception de données au format (Content-type) x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Définition du moteur de rendu
app.use(router);

// Je lance l'écoute de mon serveur
app.listen(PORT, () => debug(`Serveur démarré http://localhost:${PORT}`));
