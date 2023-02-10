const mysql = require('mysql');
const pg = require('pg')
const Pool = require('pg').Pool;

const CON_STRING = 'postgres://zbifugiuxoyjwl:520ec0140798a4e4757f45fb9a92b4dcfe6290116bfe4b2407a0d8f2ae60fe74@ec2-34-207-12-160.compute-1.amazonaws.com:5432/d1dihgggmvp970';

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