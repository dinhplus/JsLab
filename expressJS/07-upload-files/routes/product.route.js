const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');
const paginateMiddleware = require('../middlewares/productPaginate.middleware');
const productValidate = require('../validate/product.validate');


router.get('/', paginateMiddleware.paginate, productController.index);
router.get('/search', productController.search, paginateMiddleware.paginate, productController.index);
router.get('/show/:id', productController.show);
router.get('/create', productController.create);
router.get('/edit/:id', productController.edit);



router.post('/create', productValidate.postProduct, productController.postProduct);
router.post('/update/:id', productValidate.putProduct, productController.updateProduct);
module.exports = router;