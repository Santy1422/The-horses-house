const multer = require('multer');

const storage = multer.memoryStorage();

// En lugar de hardcodear 'pdf', usa una función para especificar el nombre del campo
const upload = (fieldName) => multer({ storage: storage }).single(fieldName);

exports.upload = upload;