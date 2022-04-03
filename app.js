const express = require("express");
const bodyParser = require('body-parser');
const Dictionary = require('oxford-dictionary-api');
const https = require('https');
const mysql = require('mysql');

const dotenv = require('dotenv')

dotenv.config()

const db = require('./db/connection'); 

const PORT = process.env.PORT || 3000;

const app = express();

// my routes
const authRoutes = require('./routes/auth');
const fetchWords = require('./routes/fetchWords');
const googleDictionaryApi = require('./routes/googleDictionaryApi');

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
    let sql = "CREATE TABLE words(s_no SERIAL PRIMARY KEY, word VARCHAR(255), language_code VARCHAR(10), part_of_speech VARCHAR(50), definition VARCHAR(255))";
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
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

// MY ROUTES
app.use('/api', authRoutes);
app.use('/api', fetchWords);
app.use('/api', googleDictionaryApi);

// STARTING THE SERVER
app.listen(PORT, () => console.log("Server Up and running"));