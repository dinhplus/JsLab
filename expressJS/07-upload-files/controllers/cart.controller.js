var db = require('../db');

module.exports.showCart = (req, res, next) => {
    next();
}
module.exports.addToCart = (req, res, next) => {
    let sessionId = req.signedCookies.sessionId;
    // let productId = req.params.productId;
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