const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: '1234',
    database: 'dictionary'
})

db.connect((err) => {
    if(err){
        console.log(err);
        return;
    }

    console.log('DB Connected.')
})

module.exports = db;