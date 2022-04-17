const {check, validationResult } = require('express-validator');
const googleDictionary = require('google-dictionary-api');

exports.googleDictionaryApi = (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty){
        return res.status(422).json({
            error : errors.array()[0].msg,
        });
    }

    const { word, languageCode } = req.body;

    googleDictionary.search(word, languageCode).then((results) => {
        return res.status(200).json({
            'statusCode' : 200,
            'developerMessage' : 'Word Found.!!',
            'result' : results
        })
    }).catch((error)=> {
        return res.status(404).json({
            'statusCode' : 404,
            'developerMessage' : 'Some Error Occurred.',
            'result' : error
        })
    })

}