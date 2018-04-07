const promise = require('bluebird'); // or any other Promise/A+ compatible library;

const initOptions = {
  promiseLib: promise // overriding the default (ES6 Promise);
};

const pgp = require('pg-promise')(initOptions);

const cn = {
  host: process.env.DB_HOST || 'localhost',
  port: 5432, // 5432 is the default;
  database: 'thesis',
  user: 'postgres',
  password: 'admin'
};


const knexConfig = require('./knexfile.js').development
module.exports.knex = require('knex')(knexConfig)