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

    const post = {
        email : email,
        name : name,
        password : password
    }

    let sql = "INSERT INTO users SET ?";

    let query = db.query(sql, post, (err) => {
        if(err){
            console.log(err);
            return;
        }

        return res.status(200).json({
            'statusCode' : 200,
            'developerMessage' : 'User added successfully.'
        })
    })
}