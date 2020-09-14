var db = require('../db');

module.exports.paginate = (req, res, next) => {
    // console.log(req.query);
    let page = !req.query.page ? 1 : (req.query.page <= 1 ? 1 : req.query.page);

    // console.log(page);
    let products = res.locals.matchProducts ? res.locals.matchProducts : db.get('products').value();
    let perPage = 20;
    let pageQuantity = products.length % perPage === 0 ? products.length / perPage : products.length / perPage + 1;

    begin = perPage * (page - 1);
    end = page * perPage;
    let items = products.slice(begin, end);
    res.locals.items = items;
    res.locals.pageQuantity = pageQuantity;
    res.locals.page = page;
    // res.locals.q = res.locals.q ? q : false;

    next();
}