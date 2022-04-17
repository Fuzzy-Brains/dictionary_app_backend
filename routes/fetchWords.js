var express = require('express');
var router = express.Router();

const {check} = require('express-validator');
const {fetchDefinitionByWord, getAllWords, insertIntoEnglishWords,
     insertIntoHindiWords, insertIntoChhattisgarhiWords, getRandomWord} = require('../controllers/fetchWords');

router.get('/getAllWords', getAllWords )
router.post('/insertIntoEnglishWords', insertIntoEnglishWords);
router.post('/insertIntoHindiWords', insertIntoHindiWords);
router.post('/insertIntoChhattisgarhiWords', insertIntoChhattisgarhiWords);

router.get('/getRandomWord', getRandomWord);

router.post(
    '/fetchDefinitionByWord',
    [
        check('word', 'Please enter a valid word.').isLength({min : 2}),
        check('languageCode', 'Please enter a valid language code.').isLength({min : 2})
    ],
    fetchDefinitionByWord
)

module.exports = router;