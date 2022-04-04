const {check, validationResult} = require('express-validator');
const db = require('../db/connection');

exports.getAllWords = (req, res) => {
    let sql = 'SELECT * FROM WORDS';

    db.query(sql, (err, results) => {
        if(err){
            return res.status(404).json({
                'statusCode' : 404, 
                'developerMessage' : 'Some Error Occurred.',
                'result' : results.rows
            });
        }

        return res.status(200).json({
            'statusCode' : 200, 
            'developerMessage' : 'Words fetched successfully.',
            'result' : results.rows
        });
    })
}

exports.insertWord = (req, res)=> {
    const { englishWord, hindiWord, chhattisgarhiWord } = req.body;

    let sql = 'INSERT INTO words (english, hindi, chhattisgarhi) VALUES ($1, $2, $3)';

    db.query(sql, [englishWord, hindiWord, chhattisgarhiWord], (err, results) => {
        if(err){
            console.log(err);
            return res.status(404).json({
                'statusCode' : 404, 
                'developerMessage' : 'Some Error Occurred.',
                'result' : []
            });
        }

        return res.status(200).json({
            'statusCode' : 200, 
            'developerMessage' : 'Word inserted successfully.',
            'result' : results.rows
        });
    })
}

exports.fetchDefinitionByWord = (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }

    const {languageCode, word} = req.body;

    if(languageCode == 'en'){
        let sql = 'SELECT * FROM WORDS WHERE ENGLISH = $1';

        let query = db.query(sql, [word], (err, results) => {
            if(err){
                console.log(err);
                return res.status(404).json({
                    'statusCode' : 404, 
                    'developerMessage' : 'Some Error Occurred.',
                    'result' : results.rows
                });
            }

            return res.status(200).json({
                'statusCode' : 200,
                'developerMessage' : 'Words fetched successfully.',
                'result' : results.rows
            })
        })
    }else if(languageCode == 'hi'){
        let sql = 'SELECT * FROM WORDS WHERE HINDI = $1';

        let query = db.query(sql, [word], (err, results) => {
            if(err){
                console.log(err);
                return res.status(404).json({
                    'statusCode' : 404, 
                    'developerMessage' : 'Some Error Occurred.',
                    'result' : results.rows
                });
            }

            return res.status(200).json({
                'statusCode' : 200,
                'developerMessage' : 'Words fetched successfully.',
                'result' : results.rows
            })
        })
    }else{
        let sql = 'SELECT * FROM WORDS WHERE CHHATTISGARHI = $1';

        let query = db.query(sql, [word], (err, results) => {
            if(err){
                console.log(err);
                return res.status(404).json({
                    'statusCode' : 404, 
                    'developerMessage' : 'Some Error Occurred.',
                    'result' : results.rows
                });
            }

            return res.status(200).json({
                'statusCode' : 200,
                'developerMessage' : 'Words fetched successfully.',
                'result' : results.rows
            })
        })
    }

}
