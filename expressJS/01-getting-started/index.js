const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 9000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var $usersList = JSON.parse(fs.readFileSync('./db/users.json'));
// console.log($usersList);
app.set('view engine', 'pug');	
app.set('views', './views');

app.get('/', (req, res) =>
    res.render('index', {
        name: 'dinh',
    })
);

app.get('/users', (req, res) =>
    res.render('users/index', {
        users: $usersList,
    })
);

app.get('/users/search', (req, res) => {
    var q = req.query.q;
    console.log(q);

    var matchUsers = $usersList.filter(
        (user) => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    );
    res.render('users/index', {
        users: matchUsers,
    });

    // res.render("users/search");
});
app.get('/users/create', (req, res) => {
    res.render('users/crtform', $usersList);
    // res.send('adgasdkhadsh');
    // console.log(req.body);
});
app.post('/user/create', (req, res) => {
    $usersList.push(req.body);
    let content = JSON.stringify($usersList);
    console.log(content);
    fs.writeFileSync('./db/users.json', content, {
        encoding: 'utf-8',
    });
    res.redirect('/users');
});
app.listen(port, () => console.log('App listenning on port' + port));
