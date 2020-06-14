const shortid = require('shortid');
const md5 = require('md5');
var db = require('../db');

module.exports.index = (req, res, next) => {
    // console.log(res.locals.pageQuantity);
    res.render('products/index', {
        products: res.locals.items,
        pageQuantity: parseInt(res.locals.pageQuantity),
        currentPage: parseInt(res.locals.page),
        q: res.locals.q,
    })

}
module.exports.search = (req, res, next) => {
    let q = req.query.q;

    var matchProducts = db
        .get('products')
        .filter(
            (product) => product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
        )
        .value();
    res.locals.matchProducts = matchProducts;
    res.locals.q = q;
    next()
}
module.exports.show = (req, res, next) => {
    let id = req.params.id;
    res.render('products/showProduct', {
        product: db.get('products').find({
            id: id
        }).value()
    })
}