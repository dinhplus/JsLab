const shortid = require('shortid');
const md5 = require('md5');
var db = require('../db');

module.exports.index = (req, res, next) => {
    // console.log(res.locals.pageQuantity);
    var products = db.get("products").value();
    for (let product of products) {
        product.price = 25000;

    }

    res.render('products/index', {
        products: res.locals.items,
        pageQuantity: parseInt(res.locals.pageQuantity),
        currentPage: parseInt(res.locals.page),
        q: res.locals.q,
        isAdmin: res.locals.isAdmin,
        sessionId: res.locals.sessionId
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
        }).value(),
        sessionId: res.locals.sessionId
    })
}
module.exports.create = (req, res, next) => {
    if (!res.locals.isAdmin) res.redirect('/admin');
    res.render('products/create', {
        isAdmin: res.locals.isAdmin,
    });
}
module.exports.postProduct = (req, res, next) => {
    if (!res.locals.isAdmin) {
        // Tạm thời cứ redirect về trang đăng nhập trước đã, về sau sẽ bổ sung phần bảo vệ dữ liệu đã nhập
        res.redirect('/admin/login');
    }


    if (res.locals.isAdmin) {
        req.body.image = "/" + req.file.path.split("/").slice(1).join("/");
        var data = req.body;

        req.body.id = shortid.generate();
        db.get('products').push(data).write();
        res.redirect('/products', 301);
    }
}
module.exports.edit = (req, res, next) => {
    if (!res.locals.isAdmin) res.redirect('/admin');
    let id = req.params.id;
    res.render('products/edit', {
        product: db
            .get('products')
            .find({
                id: id,
            })
            .value(),
        isAdmin: res.locals.isAdmin,
    });
}
module.exports.updateProduct = (req, res, next) => {
    if (!res.locals.isAdmin) {
        // Tạm thời cứ redirect về trang đăng nhập trước đã, về sau sẽ bổ sung phần bảo vệ dữ liệu đã nhập
        res.redirect('/admin/login');
    }
    if (res.locals.isAdmin) {
        let id = req.params.id;
        if (req.file) {
            req.body.image = "/" + req.file.path.split("/").slice(1).join("/");
        } else {
            req.body.image = db.get("products").find({
                id: id
            }).value().image;
        }

        var data = req.body;


        db.get('products')
            .find({
                id: id,
            })
            .assign(data)
            .write();
        let linkRDR = '/products/show/' + id;
        res.redirect(linkRDR);
    }

}