// Import de JWT
const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '5sdza45gffzd47akbijfldj12djzjsdl554df5f5z5jfjfj4f5fz45fzjnzdkjdzf22z7zkjdfizchlkdfkj45zcjcznjfj';

module.exports = {
  /**
   * Fonction de génération de token JWT
   * @param {Object} userData les infos d'un utilisateur enregistré
   * @returns un token JWT valide
   */
  generateTokenForUser(userData) {
    // Utilisation de la méthode sign de JWT pour créer un nouveau token
    return jwt.sign(
      // Assignation d'informations lié à l'utilisateur dans son token
      {
        userId: userData.id,
        role: userData.role_id,
        score: userData.score,
      },
      // Clé secrète de signature de token
      JWT_SIGN_SECRET,
      // Assignation d'un durée d'expiration du token
      {
        expiresIn: '1h',
      },
    );
  },
};
