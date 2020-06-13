const shortid = require('shortid');
var db = require('../db');


var users = db.get('users').value();
module.exports.index = (req, res) => {
    res.render('users/index', {
        users: users,
    });
}
module.exports.search = (req, res) => {
    let q = req.query.q;

    var matchUsers = db
        .get('users')
        .filter(
            (user) => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
        )
        .value();
    res.render('users/index', {
        users: matchUsers,
    });
}
module.exports.create = (req, res) => {
    res.render('users/createUser');
}
module.exports.postUser = (req, res) => {
    req.body.id = shortid.generate();
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
    db.get('users').push(req.body).write();
    res.redirect('/users');
}
module.exports.showUser = (req, res) => {
    let id = req.params.id;
    res.render('users/user', {
        user: db
            .get('users')
            .find({
                id: id,
            })
            .value(),
    });
}
module.exports.editUser = (req, res) => {
    let id = req.params.id;
    res.render('users/edit', {
        user: db
            .get('users')
            .find({
                id: id,
            })
            .value(),
    });
}
module.exports.updateUser = (req, res) => {
    let id = req.params.id;
    db.get('users')
        .find({
            id: id,
        })
        .assign(req.body)
        .write();
    res.redirect('/users');
}
module.exports.deleteUser = (req, res) => {
    let id = req.params.id;
    db.get('users')
        .remove({
            id: id,
        })
        .write();
    res.redirect('/users');
}