var db = require('../db');

module.exports.authMiddleWare = (req, res, next) => {
    var user = db.get('users').find({
        currentSession: req.signedCookies.userCookie
    }).value();
    // console.log(checkLogin);
    if (!user) {
        // res.redirect('admin/login');
        res.locals.isAdmin = false;

    } else {

        res.locals.userName = user.name;
        res.locals.isAdmin = true;
        console.log('new session with cookies ', req.signedCookies.userCookie, 'logined!');
    }
    // res.send(res.locals.isAdmin);
    next();
}
module.exports.adminLogin = (req, res, next) => {
    var user = db.get('users').find({
        currentSession: req.signedCookies.userCookie
    }).value();
    if (!user) {
        res.redirect('/admin/login');
    } else {
        res.locals.userName = user.name;
    }

    next();
}