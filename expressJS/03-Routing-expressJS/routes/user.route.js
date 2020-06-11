const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const db = require('../db');

// code below

/**
 * Show userList
 */
var users = db.get('users').value();
router.get('/', (req, res) => {
    res.render('users/index', {
        users: users,
    });
});

/**
 * Query user from user List
 */

router.get('/search', (req, res) => {
    let q = req.query.q;
    console.log(q);
    var matchUsers = db
        .get('users')
        .filter(
            (user) => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
        )
        .value();
    res.render('users/index', {
        users: matchUsers,
    });
});
/**
 * Generate new user and store them to Database
 */
router.post('/create', (req, res) => {
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users');
});

/**
 * Show user detail
 */
router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.render('users/user', {
        user: db
            .get('users')
            .find({
                id: id,
            })
            .value(),
    });
});
/**
 * Upadate user profile
 */

router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    res.render('users/edit', {
        user: db
            .get('users')
            .find({
                id: id,
            })
            .value(),
    });
});
router.post('/update/:id', (req, res) => {
    let id = req.params.id;
    db.get('users')
        .find({
            id: id,
        })
        .assign(req.body)
        .write();
    res.redirect('/users');
});

router.get('/delete/:id', (req, res) => {
    let id = req.params.id;
    db.get('users')
        .remove({
            id: id,
        })
        .write();
    res.redirect('/users');
});

module.exports = router;