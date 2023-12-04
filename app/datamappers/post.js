// Importe l'instance du pool de connexions à la base de données depuis le fichier 'pool.js' local.
// Ce pool est utilisé pour gérer et optimiser les connexions à la base de données,
// facilitant les requêtes et les transactions dans le DataMapper.
const pool = require('./pool');

// Initialisation à la connexion à la base de données
const postDatamapper = {
  /**
   * Méthode: récupérer tous les posts de la base de données
   * @returns retourne tout les posts
   */
  async findAll() {
    const sqlQuery = 'SELECT * FROM post';
    const results = await pool.query(sqlQuery);
    return results.rows;
  },
  /**
   * Méthode: récupérer un post par son id
   * @param {number} id - id du post
   * @returns retourne un post
   */
  async findById(id) {
    const sqlQuery = 'SELECT * FROM post WHERE id = $1';
    const values = [id];
    const results = await pool.query(sqlQuery, values);
    return results.rows;
  },
};

module.exports = postDatamapper;
