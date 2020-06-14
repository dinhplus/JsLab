const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');
const productValidate = require('../validate/product.validate');


router.get('/', productController.index);
module.exports = router;