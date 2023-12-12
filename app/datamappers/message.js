// eslint-disable-next-line no-unused-vars
const debug = require('debug')('sensibd:message-datamapper');
// Importe l'instance du pool de connexions à la base de données depuis le fichier 'pool.js' local.
// Ce pool est utilisé pour gérer et optimiser les connexions à la base de données,
// facilitant les requêtes et les transactions dans le DataMapper.
const pool = require('./pool');

// Initialisation à la connexion à la base de données
const messageDatamapper = {
  /**
   * Méthode: récupérer tous les messages liés à un post entre deux utilisateurs
   * @returns retourne tout les messages
   */
  async findAll(postId, senderId, receiverId) {
    const sqlQuery = `
    SELECT
      "message"."id",
      "message"."content",
      "message"."created_at",
      "message"."updated_at",
      "message"."post_id",
      "message"."sender_id",
      "message"."receiver_id",
      "user"."id" AS "user_id",
      "user"."firstname",
      "user"."lastname",
      "user"."pseudonym",
      "user"."email",
      "user"."avatar",
      "user"."score"
    FROM "message"
    INNER JOIN "user" ON "user"."id" = "message"."sender_id"
    WHERE "message"."post_id" = $1
    AND (
      ("message"."sender_id" = $2 AND "message"."receiver_id" = $3)
      OR
      ("message"."sender_id" = $3 AND "message"."receiver_id" = $2)
    )
    ORDER BY "message"."created_at" ASC;`;
    const values = [postId, senderId, receiverId];
    const results = await pool.query(sqlQuery, values);
    return results.rows;
  },
};

module.exports = messageDatamapper;
