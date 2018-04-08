
exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('patient').del()
		.then(function () {
			// Inserts seed entries
			return knex('patient').insert([
				{gender: 'M', birthYear: 1}
			])
		})
}
