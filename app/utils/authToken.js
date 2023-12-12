// Import de JWT
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, '5sdza45gffzd47akbijfldj12djzjsdl554df5f5z5jfjfj4f5fz45fzjnzdkjdzf22z7zkjdfizchlkdfkj45zcjcznjfj');
    const { pseudo } = decodedToken;
    req.auth = {
      pseudo,
    };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
