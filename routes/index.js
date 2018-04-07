var express = require('express');
var router = express.Router();
const { knex } = require('../config.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.select().table('patient').then(rows => {
    res.send(rows[0])
  })
    .catch(err => {throw err})
});

module.exports = router;
