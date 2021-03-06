const express = require('express');
const router = express.Router();

const cartMiddleware = require('../middlewares/cart.middleware');
const cartController = require('../controllers/cart.controller');
const cartValidate = require('../validate/cart.validate');

// router.get('/:sessionId', cartController.showCart);
// router.get('/', (req, res) => {
//     res.send("connect done!");
// });
router.get('/', cartController.showCart);
router.post('/add', cartController.addToCart);
router.post("/decrease", cartController.subtract);
router.post('/change', cartController.itemChange)


module.exports = router;