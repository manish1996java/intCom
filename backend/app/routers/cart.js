const router = require('express').Router();
const {addToCart,deleteFromCart,clearCart} = require('../controllers/cart/cart');

router.use('/addToCart',addToCart)

router.use('/deleteFormCart',deleteFromCart);

router.use('/clearCart',clearCart)

module.exports = router;