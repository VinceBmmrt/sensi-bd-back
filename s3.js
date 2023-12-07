require('dotenv').config();
// Module natif pour travailler avec le système de fichiers
const fs = require('fs');
// Module AWS SDK pour interagir avec les services AWS, spécifiquement S3 ici
const S3 = require('aws-sdk/clients/s3');

// Récupère les informations de configuration d'AWS S3 depuis les variables d'environnement
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

// Crée une nouvelle instance du client S3 avec les détails de configuration spécifiés
const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

// Fonction pour envoyer un fichier sur S3
function uploadFile(file) {
  // console.log(file);
  // Crée un flux de lecture à partir du fichier local, nécessaire pour l'envoi vers S3
  const fileStream = fs.createReadStream(file.path);
  /* Paramètres pour l'opération d'upload sur S3, incluant le nom du bucket,
  le corps du fichier et la clé sous laquelle le fichier sera enregistré */
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };
  // console.log(uploadParams);

  /* Déclenche l'opération d'upload vers S3 et retourne une
  promesse qui se résout une fois l'upload terminé */
  return s3.upload(uploadParams).promise();
}

// Fonction pour télécharger un fichier depuis S3
function getFileStream(fileKey) {
  // Paramètres pour l'opération de téléchargement depuis S3
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };
  /* Récupère l'objet de S3 et crée un flux de lecture,
  ce qui permet de lire le contenu du fichier pour
  le transférer ou le traiter */
  s3.getObject(downloadParams).createReadStream();

  /* Récupère l'objet de S3 et crée un flux de lecture, ce qui permet
  de lire le contenu du fichier pour le transférer ou le traiter */
  return s3.getObject(downloadParams).createReadStream();
}
/* Exporte les fonctions pour qu'elles soient utilisables
dans d'autres fichiers de l'application Node.js */
module.exports = { uploadFile, getFileStream };
