module.exports.postProduct = (req, res, next) => {
    var errors = [];
    if (!req.body.name) {
        errors.push('name');
    }
    if (!req.body.price) {
        errors.push('price');
    }
    if (!req.body.quantity) {
        errors.push('quantity');
    }
    if (!req.body.description) {
        errors.push('description');
    }
    if (!req.body.image) {
        errors.push('image');
    }
    if (errors.length > 0) {
        var value = req.body;
        res.render('products/create', {
            errors: errors,
            value: value
        });
        return;
    }
    next();
}