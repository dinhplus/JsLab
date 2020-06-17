const shortid = require('shortid');
const db = require('../db');
module.exports = function(req, res, next) {

    let isActive = db.get("session").find({
        id: req.signedCookies.sessionId
    }).value();
    // console.log(req.signedCookies.sessionId);
    if (!isActive) {
        var sessionId = shortid.generate();
        res.cookie('sessionId', sessionId, {
            signed: true,
        });
        db.get('session')
            .push({
                id: sessionId,
            })
            .write();
    }
    res.locals.sessionId = isActive ? req.signedCookies.sessionId : sessionId;
    next();
};