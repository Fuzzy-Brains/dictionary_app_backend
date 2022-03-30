const express = require("express");
const bodyParser = require('body-parser');
const Dictionary = require('oxford-dictionary-api');
const https = require('https');
const mysql = require('mysql');
const db = require('./db/connection'); 

const app = express();

// my routes
const authRoutes = require('./routes/auth');
const fetchWords = require('./routes/fetchWords');

app.get('/', (req, res) => {
    res.send('Hello, World');
})

// CREATE DB ROUTE
app.get('/createDB', (req, res) => {
    let sql = 'CREATE DATABASE dictionary';
    db.query(sql, (err) => {
        if(err){
            console.log(err)
            return
        }

        return res.status(200).json({
            'statusCode' : 200,
            'developerMessage' : 'Database created successfully.'
        })
    })
})


// CREATE TABLE ROUTE
app.get('/createWordsTable', (req, res) => {
    let sql = "CREATE TABLE words(s_no int AUTO_INCREMENT, word VARCHAR(255), language_code VARCHAR(10), definition VARCHAR(255), PRIMARY KEY(s_no))";
    db.query(sql, (err) => {
        if(err){
            console.log(err);
            return;
        }

        return res.status(200).json({
            'statusCode' : 200,
            'developerMessage' : 'Table Created Successfully.'
        })
    })
})

// MIDDLEWARE
app.use(bodyParser.json());

// MY ROUTES
app.use('/api', authRoutes);
app.use('/api', fetchWords);

// STARTING THE SERVER
app.listen(3000, () => console.log("Server Up and running"));