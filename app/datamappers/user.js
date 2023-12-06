// Importe l'instance du pool de connexions à la base de données depuis le fichier 'pool.js' local.
// Ce pool est utilisé pour gérer et optimiser les connexions à la base de données,
// facilitant les requêtes et les transactions dans le DataMapper.
const pool = require('./pool');

// Initialisation à la connexion à la base de données
const userDatamapper = {
  /**
   * Méthode: récupérer tous les posts de la base de données
   * @returns retourne tout les posts
   */
  async findAll() {
    const sqlQuery = 'SELECT * FROM "user"';
    const results = await pool.query(sqlQuery);
    return results.rows;
  },
  /**
   * Méthode: récupérer un utilisateur de la BDD par son ID
   * @param {number} id id de l'utilisateur
   * @returns retourne un utilisateur
   */
  async findById(id) {
    const sqlQuery = 'SELECT * FROM "user" WHERE id = $1';
    const values = [id];
    const results = await pool.query(sqlQuery, values);
    return results.rows;
  },
  async addUserAddress(addressObj) {
    const values = [
      addressObj.full_address,
      addressObj.number,
      addressObj.street,
      addressObj.zipcode,
      addressObj.city,
      addressObj.country,
      addressObj.latitude,
      addressObj.longitude,
    ];
    const sqlQuery = `
    INSERT INTO "address"
      ("full_address", "number", "street", "zipcode", "city", "country", "latitude", "longitude")
    VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING id;`;
    const results = await pool.query(sqlQuery, values);
    return results.rows[0].id;
  },
  async addNewUser(userObj, addressId) {
    const values = [
      userObj.firstname,
      userObj.lastname,
      userObj.pseudonym,
      userObj.email,
      userObj.avatar,
      userObj.password,
      addressId,
    ];
    const sqlQuery = `
      INSERT INTO "user"
        ("firstname", "lastname","pseudonym","email", "avatar", "password","address_id")
      VALUES
        ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;`;
    const results = await pool.query(sqlQuery, values);
    return results.rows[0];
  },
  async update(id, user) {
    const values = [
      user.firstname,
      user.lastname,
      user.pseudonym,
      user.email,
      user.avatar,
      user.password,
      id,
    ];
    const sqlQuery = `
    UPDATE "user"
    SET
      "firstname" = $1,
      "lastname" = $2,
      "pseudonym" = $3,
      "email" = $4,
      "avatar" = $5,
      "password" = $6,
      "updated_at" = now()
    WHERE "id" = $7
    RETURNING *;`;
    const results = await pool.query(sqlQuery, values);
    return results.rows;
  },
  async delete(id) {
    const sqlQuery = 'DELETE FROM "user" WHERE id = $1;';
    const values = [id];
    await pool.query(sqlQuery, values);
  },
};

module.exports = userDatamapper;
