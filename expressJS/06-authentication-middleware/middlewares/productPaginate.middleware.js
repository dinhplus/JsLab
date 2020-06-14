var db = require('../db');

module.exports.paginate = (req, res, next) => {
    // console.log(req.query);
    let page = !req.query.page ? 1 : (req.query.page <= 1 ? 1 : req.query.page);

    // console.log(page);
    let products = db.get('products').value();
    let perPage = 20;
    let pageQuantity = products.length / perPage + 1;

    begin = perPage * (page - 1);
    end = page * perPage;
    let items = products.slice(begin, end);
    res.locals.items = items;
    res.locals.pageQuantity = pageQuantity;
    res.locals.page = page;

    next();
}