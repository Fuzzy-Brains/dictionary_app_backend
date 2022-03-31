const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'sql.freedb.tech',
    user : 'freedb_yuvraj',
    password: 'Nxk!JNMbkzBR#2?',
    database: 'freedb_dictionary'
})

db.connect((err) => {
    if(err){
        console.log(err);
        return;
    }

    console.log('DB Connected.')
})

module.exports = db;