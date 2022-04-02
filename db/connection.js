const mysql = require('mysql');
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'dictionary',
    password: '1234',
    port: 5432
});

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

module.exports = pool;