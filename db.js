const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:postgres@localhost:5432/auth'

const pool = new Pool({
  connectionString: connectionString,
})

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

const client = new Client({
  connectionString: connectionString,
})
client.connect()

module.exports = client;
