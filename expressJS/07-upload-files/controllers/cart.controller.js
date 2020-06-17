var db = require('../db');

module.exports.showCart = (req, res, next) => {
    next();
}
module.exports.addToCart = (req, res, next) => {
    let sessionId = req.params.sessionId;
    let productId = req.query.pid;
    var session = db.get("session").find({
        id: sessionId
    });
    var cart = session.cart ? session.cart : [];
    cart.push({
        "productId": productId
    });
    db.get("session").find({
        id: sessionId
    }).assign({
        id: sessionId,
        cart: cart
    });
    res.return;

    next();
}