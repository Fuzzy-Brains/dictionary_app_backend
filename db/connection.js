const mysql = require('mysql');
const pg = require('pg')
const Pool = require('pg').Pool;

const CON_STRING = 'postgres://zbifugiuxoyjwl:520ec0140798a4e4757f45fb9a92b4dcfe6290116bfe4b2407a0d8f2ae60fe74@ec2-34-207-12-160.compute-1.amazonaws.com:5432/d1dihgggmvp970';
const client = new pg.Client({
    connectionString: CON_STRING,
    dialect: 'postgresql',
    // ssl: true,
    ssl: {
        rejectUnauthorized: false,
    }
});

client.connect();


// const pool = new Pool({
//     user: 'zbifugiuxoyjwl',
//     host: 'ec2-34-207-12-160.compute-1.amazonaws.com',
//     database: 'd1dihgggmvp970',
//     password: '520ec0140798a4e4757f45fb9a92b4dcfe6290116bfe4b2407a0d8f2ae60fe74',
//     port: 5432, ssl: true
// });

// pool.connect();

console.log('Database Connected.');



// const db = mysql.createConnection({
//     host: 'sql.freedb.tech',
//     user : 'freedb_yuvraj',
//     password: 'Nxk!JNMbkzBR#2?',
//     database: 'freedb_dictionary'
// })

// db.connect((err) => {
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log('DB Connected.')
// })

module.exports = client;