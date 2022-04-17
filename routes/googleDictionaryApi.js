var express = require('express');
var router = express.Router();

const {check} = require('express-validator');
const {googleDictionaryApi} = require('../controllers/googleDictionaryApi');

router.post(
    '/googleDictionaryApi',
    [
        check('word', 'Please enter a valid word.').isLength({ min : 1 })
    ],
    googleDictionaryApi
)

module.exports = router;