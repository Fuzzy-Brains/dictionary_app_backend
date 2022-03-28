var express = require('express');
var router = express.Router();

const {check} = require('express-validator');
const {signup, signin, signout, isSignedIn } = require('../controllers/auth');

router.post(
    '/signup',
    [
        check('name', 'Name should be atleast of 3 characters.').isLength({ min: 3}),
        check('email', 'email is required').isEmail(),
        check('password', 'password should be atleast of 3 characters.').isLength({ min: 3})
    ],
    signup
)

module.exports = router;