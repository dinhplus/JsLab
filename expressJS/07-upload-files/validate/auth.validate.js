module.exports.postLoginValidate = (req, res, next) => {
    var errors = [];
    if (!req.body.email) {
        errors.push('email');
    }
    if (!req.body.passwords) {
        errors.push('passwords');
    }
    if (errors.length > 0) {
        var value = req.body;
        res.render('auth/login', {
            errors: errors,
            value: value
        });
        return;
    }
    next();
}