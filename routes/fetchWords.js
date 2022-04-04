var express = require('express');
var router = express.Router();

const {check} = require('express-validator');
const {fetchDefinitionByWord, getAllWords, insertWord} = require('../controllers/fetchWords');

router.get(
    '/getAllWords',

    getAllWords
)

router.post('/insertWord', insertWord);

router.post(
    '/fetchDefinitionByWord',
    [
        check('word', 'Please enter a valid word.').isLength({min : 2}),
        check('languageCode', 'Please enter a valid language code.').isLength({min : 2})
    ],
    fetchDefinitionByWord
)

module.exports = router;