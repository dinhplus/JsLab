var db = require('../db');
var users = db.get('users').value();
module.exports.postUser = (req, res, next) => {
    var errors = [];
    if (!req.body.name) {
        errors.push('name');
    }
    if (!req.body.phone) {
        errors.push('phone');
    }
    if (!req.body.age) {
        errors.push('age');
    }
    if (errors.length > 0) {
        var value = req.body;
        res.render('users/createUser', {
            errors: errors,
            value: value
        });
        return;
    }
    next();
}
module.exports.updateUser = (req, res, next) => {
    var id = req.params.id;
    var errors = [];
    if (!req.body.name) {
        errors.push('name');
    }
    if (!req.body.phone) {
        errors.push('phone');
    }
    if (!req.body.age) {
        errors.push('age');
    }
    if (errors.length > 0) {
        var value = req.body;
        value.id = req.params.id
        res.render('users/edit', {
            errors: errors,
            value: value,
            user: db
                .get('users')
                .find({
                    id: id,
                })
                .value()

        });
        console.log(users);
        return value;
    }
    next();
}