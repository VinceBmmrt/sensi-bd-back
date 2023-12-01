// Objet: regroupe tous les datamappers
// Instanciation: const datamapper = require('./datamappers');
const debug = require('debug')('app:datamappers');
// Importation du module pool
const pool = require('./pool');

const datamapper = {};

module.exports = datamapper;