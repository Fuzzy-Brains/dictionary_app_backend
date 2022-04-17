const {check, validationResult } = require('express-validator');
const db = require('../db/connection');

exports.signup = (req, res) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(422).json({
            error : errors.array()[0].msg,
        });
    }

    const {email, name, password} = req.body;

    let sql = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";

    let query = db.query(sql, [name, email, password], (err, result) => {
        if(err){
            console.log(err);
            return res.status(400).json({
                'statusCode' : 400,
                'developerMessage' : 'Email Id already exists.!!',
                'result' : []
            });
        }

        return res.status(200).json({
            'statusCode' : 200,
            'developerMessage' : 'User added successfully.',
            'result' : result.rows
        })
    })
}

exports.signin = (req, res) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(422).json({
            error : errors.array()[0].msg,
        });
    }

    const {email, password} = req.body;

    let sql = "SELECT * FROM users WHERE email = $1 AND password = $2";

    let query = db.query(sql, [email, password], (err, result) => {
        if(err){
            console.log(err);
            return res.status(404).json({
                'statusCode' : 404, 
                'developerMessage' : 'Some Error Occurred.',
                'result' : []
            });
        }

        if(result.rows.length==0){
            return res.status(400).json({
                'statusCode' : 400, 
                'developerMessage' : 'Invalid Email/ Password.',
                'result' : result.rows
            });
        }

        return res.status(200).json({
            'statusCode' : 200,
            'developerMessage' : 'Logged In Successfully.',
            'result' : result.rows[0]
        })
    })
}