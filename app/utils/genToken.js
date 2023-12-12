// Import de JWT
const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '5sdza45gffzd47akbijfldj12djzjsdl554df5f5z5jfjfj4f5fz45fzjnzdkjdzf22z7zkjdfizchlkdfkj45zcjcznjfj';

module.exports = {
  generateTokenForUser(userData) {
    return jwt.sign(
      {
        userId: userData.id,
        role: userData.role_id,
      },
      JWT_SIGN_SECRET,
      {
        expiresIn: '1h',
      },
    );
  },
};
