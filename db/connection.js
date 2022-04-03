const mysql = require('mysql');
const pg = require('pg')
const Pool = require('pg').Pool;

const CON_STRING = process.env.DB_URL || 'postgres://root:1234@localhost:5432/dictionary';
console.log(CON_STRING)

const pool = new Pool({
    connectionString: CON_STRING,
    // dialect: 'postgresql',
    // ssl: true,
    ssl: {
        rejectUnauthorized: false,
    }
});

pool.connect().then((result)=> {
    console.log('Database Connected.');
}).catch((error) => {
    console.log(error);
})

module.exports = pool;