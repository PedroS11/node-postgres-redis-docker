const knexConfig = require('./knexfile.js').development

module.exports.knex = require('knex')(knexConfig)