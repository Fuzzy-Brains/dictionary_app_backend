const {check, validationResult} = require('express-validator');
const db = require('../db/connection');

exports.fetchDefinitionByWord = (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }

    const {languageCode, word} = req.body;

    let sql = 'SELECT * FROM WORDS WHERE WORD = ? AND LANGUAGE_CODE = ?';

    let query = db.query(sql, [word,languageCode], (err) => {
        if(err){
            console.log(err);
            return;
        }

        // console.log(query['_results'][0]);
        var data = [];
        for(var x in query['_results'][0]){
            // console.log(query['_results'][0][x]);
            data.push({
                'word' : query['_results'][0][x]['word'],
                'languageCode' : query['_results'][0][x]['language_code'],
                'definition': query['_results'][0][x]['definition']
            });
        }

        // console.log(data);

        return res.status(200).json({
            'statusCode' : 200,
            'developerMessage' : 'Words fetched successfully.',
            'data' : data
        })
    })

}
