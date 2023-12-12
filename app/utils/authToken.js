// Import de JWT
const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '5sdza45gffzd47akbijfldj12djzjsdl554df5f5z5jfjfj4f5fz45fzjnzdkjdzf22z7zkjdfizchlkdfkj45zcjcznjfj';

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, JWT_SIGN_SECRET);
    const { pseudo } = decodedToken;
    req.auth = {
      pseudo,
    };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
