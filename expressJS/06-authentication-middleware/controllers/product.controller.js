const shortid = require('shortid');
const md5 = require('md5');
var db = require('../db');

module.exports.index = (req, res, next) => {
    console.log(res.locals.pageQuantity);
    res.render('products/index', {
        products: res.locals.items,
        pageQuantity: parseInt(res.locals.pageQuantity),
        currentPage: parseInt(res.locals.page)
    })

}