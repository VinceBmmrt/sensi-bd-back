// Objet: regroupe tous les datamappers
// Instanciation: const datamapper = require('./datamappers');
// const debug = require('debug')('app:datamappers');
// Importation du module pool
const postDatamapper = require('./post');
const userDatamapper = require('./user');

module.exports = {
  postDatamapper, userDatamapper,
};
