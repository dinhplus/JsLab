var db = require('../db');
// const {
//     value
// } = require('../db');

module.exports.showCart = (req, res, next) => {
    let sessionId = req.signedCookies.sessionId;
    if (!sessionId);
    let cart = db.get("session").find({
        id: sessionId
    }).value().cart;
    // console.log(cart);
    let items = [];
    for (const property in cart) {
        let item = new Object;
        // console.log(property);
        item.id = property;
        item.count = cart[property];
        console.log(item.count);
        item.price = db.get("products").find({
            id: item.id
        }).value().price;
        item.name = db.get("products").find({
            id: item.id
        }).value().name;
        item.description = db.get("products").find({
            id: item.id
        }).value().description;

        item.image = db.get("products").find({
            id: item.id
        }).value().image;
        if (item.count > 0) {
            items.push(item);
        }

    }
    res.render("shop/cart", {
        sessionId: sessionId,
        items: items
    })
    next();
}
module.exports.addToCart = (req, res, next) => {
    let sessionId = req.signedCookies.sessionId;
    let productId = req.body.productId;
    if (!sessionId) {
        res.redirect("/products");
        return;
    }
    let count = db.get("session").find({
            id: sessionId
        }).get("cart." + productId, 0)
        .value();
    db.get("session").find({
            id: sessionId
        }).set("cart." + productId, count + 1)
        .write();
    res.redirect("/products");
    // return;
    next();
}

module.exports.subtract = (req, res, next) => {
    let sessionId = req.signedCookies.sessionId;
    let productId = req.body.productId;
    if (!sessionId) {
        res.redirect("/products");
        return;
    }
    let count = db.get("session").find({
            id: sessionId
        }).get("cart." + productId, 0)
        .value();
    db.get("session").find({
            id: sessionId
        }).set("cart." + productId, count == 0 ? 0 : count - 1)
        .write();
    res.redirect("/products");
    // return;
    next();
}
module.exports.itemChange = (req, res, next) => {
    let sessionId = req.signedCookies.sessionId;
    let productId = req.body.productId;
    let count = parseInt(req.body.newQuantity);
    if (!sessionId) {
        res.redirect("/products");
        return;
    }
    console.log(count);
    db.get("session").find({
            id: sessionId
        }).set("cart." + productId, count ? count : 0)
        .write();
    res.redirect("/products");
    // return;
    next();
}