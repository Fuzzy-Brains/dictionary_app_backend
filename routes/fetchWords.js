var express = require('express');
var router = express.Router();

const {check} = require('express-validator');
const {fetchDefinitionByWord, getAllWords} = require('../controllers/fetchWords');

router.get(
    '/getAllWords',
    
    getAllWords
)

router.post(
    '/fetchDefinitionByWord',
    [
        check('word', 'Please enter a valid word.').isLength({min : 2}),
        check('languageCode', 'Please enter a valid language code.').isLength({min : 2})
    ],
    fetchDefinitionByWord
)

module.exports = router;