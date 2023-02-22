const { Pool } = require('pg');

const c = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin123",
    database: "pern"
})

module.exports = c;