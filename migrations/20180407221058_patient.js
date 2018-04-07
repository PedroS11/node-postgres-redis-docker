
exports.up = function(knex, Promise) {
  return knex.schema.createTable('patient', function (table) {
    table.increments();
    table.text('gender').notNullable();
    table.integer('birthYear').notNullable().unsigned();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patient')
};
