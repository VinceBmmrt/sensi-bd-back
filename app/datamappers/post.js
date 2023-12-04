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
  /**
   * Méthode: récupérer un post par sa catégorie
   * @param {number} id - id de la catégorie
   * @returns retourne un post
   */
  async findByCategory(id) {
    const sqlQuery = 'SELECT * FROM post WHERE category_id = $1';
    const values = [id];
    const results = await pool.query(sqlQuery, values);
    return results.rows;
  },
  /**
   * Méthode: récupérer tous les posts par audience
   * @param {number} id - id de l'audience
   * @returns retourne tous les posts
   */
  async findByAudience(id) {
    const sqlQuery = 'SELECT * FROM post WHERE audience_id = $1';
    const values = [id];
    const results = await pool.query(sqlQuery, values);
    return results.rows;
  },
  /**
   * Méthode: récupérer tous les posts par condition
   * @param {number} id - id de la condition
   * @returns retourne tous les posts
   */
  async findByCondition(id) {
    const sqlQuery = 'SELECT * FROM post WHERE condition_id = $1';
    const values = [id];
    const results = await pool.query(sqlQuery, values);
    return results.rows;
  },
  /**
   * Méthode: créer un post
   * @param {object} post - post à créer
   * @returns retourne un post
   */
  async add(post) {
    const sqlQuery = `
      INSERT INTO post
        (post_title, slug, description, image, book_title, book_author, user_id, category_id, audience_id, condition_id)
      VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *;`;
    const values = [
      post.post_title,
      post.slug,
      post.description,
      post.image,
      post.book_title,
      post.book_author,
      post.user_id,
      post.category_id,
      post.audience_id,
      post.condition_id];
    const results = await pool.query(sqlQuery, values);
    return results.rows[0];
  },
  /**
   * Méthode: modifier un post selon son id
   * @param {number} id - id du post
   * @param {object} post - post à modifier
   * @returns retourne un post
   */
  async update(id, post) {
    const sqlQuery = `
      UPDATE post
      SET
        post_title = $1,
        slug = $2,
        description = $3,
        image = $4,
        book_title = $5,
        book_author = $6,
        user_id = $7,
        category_id = $8,
        audience_id = $9,
        condition_id = $10,
        updated_at = NOW()
      WHERE id = $11
      RETURNING *;`;
    const values = [
      post.post_title,
      post.slug,
      post.description,
      post.image,
      post.book_title,
      post.book_author,
      post.user_id,
      post.category_id,
      post.audience_id,
      post.condition_id,
      id];
    const results = await pool.query(sqlQuery, values);
    return results.rows[0];
  },
  /**
   * Méthode: supprimer un post selon son id
   * @param {number} id - id du post
   */
  async delete(id) {
    const sqlQuery = 'DELETE FROM post WHERE id = $1;';
    const values = [id];
    await pool.query(sqlQuery, values);
  },
};

module.exports = postDatamapper;
