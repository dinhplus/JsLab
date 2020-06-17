const shortid = require('shortid');
const md5 = require('md5');
var db = require('../db');


// var users = db.get('users').value();

module.exports.getLogin = (req, res, next) => {
    if (res.locals.user) {
        res.redirect('/users');
    }
    res.render('auth/login');
    next();
};
module.exports.postLogin = (req, res, next) => {
    let email = req.body.email;
    let passwords = req.body.passwords;
    let user = db
        .get('users')
        .find({
            email: email,
        })
        .value();
    if (!user || !user.passwords) {
        var err =
            ' Email or passwords is incorrect! Please input  correct account!';
        var value = res.body;
        res.render('auth/login', {
            err: err,
            value: value,
        });
        return;
    }
    let hashPasswords = md5(passwords);
    if ((hashPasswords = user.passwords)) {
        let cookie = shortid.generate();
        res.cookie('userCookie', cookie, {
            signed: true,
        });
        //stored current session to db.

        user.currentSession = cookie;
        db.get('users')
            .find({
                id: user.id,
            })
            .assign(user)
            .write();
        res.redirect('/users');
    }
    next();
};