var db = require('../db')
module.exports.goShopping = (req, res, next) => {
    var auth = db.get('users').find({
        currentSession: req.signedCookies.userCookie
    }).value();
    if (auth) {
        res.send("you are administrator, so you can not shopping here! \n please logout to shopping");
    }


    next();
}