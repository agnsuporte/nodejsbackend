const { db } = require('./.env')
// const connPG = process.env.DATABASE_URL

module.exports = {
	client: 'pg',
	connection: db.pg,
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
