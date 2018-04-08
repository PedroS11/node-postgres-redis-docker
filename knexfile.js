// Update with your config settings.

module.exports = {
	development: {
		client: 'pg',
		connection: {
			host : process.env.DB_HOST,
			user : 'db_user',
			password : 'admin',
			database : 'thesis_api'
		},
		pool: {
			min: 2,
			max: 10
		}
	}
}
