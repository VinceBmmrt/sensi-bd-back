// middlewares/uploadMiddleware.js
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

module.exports = upload;
