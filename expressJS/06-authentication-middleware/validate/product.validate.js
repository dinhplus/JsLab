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
module.exports.putProduct = (req, res, next) => {
    var id = req.params.id;
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
        value.id = req.params.id
        res.render('products/edit', {
            errors: errors,
            value: value,
            product: db
                .get('products')
                .find({
                    id: id,
                })
                .value()

        });

    }
    next();
}