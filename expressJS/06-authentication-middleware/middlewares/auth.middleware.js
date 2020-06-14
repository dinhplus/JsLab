var db = require('../db');

module.exports.authMiddleWare = (req, res, next) => {
    var user = db.get('users').find({
        currentSession: req.signedCookies.userCookie
    }).value();
    // console.log(checkLogin);
    if (!user) {
        res.redirect('/login');
    } else {

        res.locals.userName = user.name;
        console.log('new session with cookies ', req.signedCookies.userCookie, 'logined!');
    }

    next();
}