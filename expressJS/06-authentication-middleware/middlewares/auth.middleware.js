var db = require('../db');

module.exports.authMiddleWare = (req, res, next) => {
    var checkLogin = db.get('users').find({
        currentSession: req.cookies.userCookie
    }).value();
    console.log(checkLogin);
    if (!checkLogin) {
        res.redirect('/login');
    } else {

        console.log('logined');
    }

    next();
}