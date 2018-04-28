
exports.up = function(knex) {
	return knex.schema.createTable('patient', function (table) {
		table.increments()
		table.text('gender').notNullable()
		table.integer('birthYear').notNullable().unsigned()
	})
}

exports.down = function(knex) {
	return knex.schema.dropTable('patient')
}
