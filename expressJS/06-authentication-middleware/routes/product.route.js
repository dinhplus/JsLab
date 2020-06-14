const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');
const paginateMiddleware = require('../middlewares/productPaginate.middleware');
const productValidate = require('../validate/product.validate');


router.get('/', paginateMiddleware.paginate, productController.index);
router.get('/search', productController.search, paginateMiddleware.paginate, productController.index);
router.get('/:id', productController.show);
module.exports = router;