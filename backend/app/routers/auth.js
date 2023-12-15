const router = require('express').Router();
const {signup,login,logout} = require('../controllers/auth/auth');

router.use('/signup',signup)

router.use('/login',login);

router.use('/logout',logout)

module.exports = router;