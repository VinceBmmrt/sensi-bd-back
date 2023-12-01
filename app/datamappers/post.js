// Importe l'instance du pool de connexions à la base de données depuis le fichier 'pool.js' local.
// Ce pool est utilisé pour gérer et optimiser les connexions à la base de données, facilitant les requêtes et les transactions dans le DataMapper.
const pool = require('./pool');

// Initialisation à la connexion à la base de données
const postDatamapper = {
<<<<<<< HEAD
  // Méthode: récupérer tous les posts de la base de données
  async findAll() {},
=======
    /**
   * Méthode: récupérer tous les posts de la base de données
   * @returns retourne tout les posts
   */
  async findAll(){
    const sqlQuery="SELECT * FROM post";
    const results= await pool.query(sqlQuery)
    return results.rows;
  },
>>>>>>> feat: Récupération de toutes les annonces
};

module.exports = postDatamapper;
