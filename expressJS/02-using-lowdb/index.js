const express = require('express');
const fs = require('fs');
const shortid = require('shortid');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapters = new FileSync('database/db.json');
const db = low(adapters);
const app = express();
const port = 8000;
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.listen(port, () => console.log('App listenning on port ' + port));
// code below

/**
 * Show userList
 */
var users = db.get('users').value();
app.get("/users", (req, res) => {
    res.render("users/index", {
        users: users,
    })
})
console.log(users);

/**
 * Query user from user List
 */

app.get("/users/search", (req, res) => {
    let q = req.query.q;
    console.log(q);
    var matchUsers = db.get("users")
        .filter((user) => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1).value();
    res.render("users/index", {
        users: matchUsers,
    })
});
/**
 * Generate new user and store them to Database
 */
db.defaults({
        users: [],
        products: []
    })
    .write()
app.post("/users/create", (req, res) => {
    req.body.id = shortid.generate();
    db.get("users").push(req.body).write();
    res.redirect("/users");
})

/**
 * Show user detail
 */
app.get("/users/:id", (req, res) => {
        let id = req.params.id;
        res.render("users/user", {
            user: db.get("users").find({
                id: id
            }).value()
        })
    })
    /**
     * Upadate user profile
     */

app.get("/users/edit/:id", (req, res) => {
    let id = req.params.id;
    res.render("users/edit", {
        user: db.get("users").find({
            id: id
        }).value()
    })
})
app.post("/users/update/:id", (req, res) => {
    let id = req.params.id;
    db.get("users").find({
        id: id
    }).assign(req.body).write();
    res.redirect("/users");
})

app.get("/users/delete/:id", (req, res) => {
    let id = req.params.id;
    db.get("users").remove({
        id: id
    }).write();
    res.redirect("/users");
})