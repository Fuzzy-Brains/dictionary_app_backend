var express = require('express');
var router = express.Router();

const {check} = require('express-validator');
const {fetchDefinitionByWord} = require('../controllers/fetchWords');

router.post(
    '/fetchDefinitionByWord',
    [
        check('word', 'Please enter a valid word.').isLength({ min : 1})
    ],
    fetchDefinitionByWord
)

module.exports = router;