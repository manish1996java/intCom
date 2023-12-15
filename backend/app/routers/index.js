const router = require('express').Router();
const authRouter = require('./auth');
const productRouter = require('./product');
const cartRouter = require('./cart');

router.use('/user',authRouter);
router.use('/product',productRouter);
router.use('/cart',cartRouter);

module.exports = router;
