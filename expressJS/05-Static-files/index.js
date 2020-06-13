const express = require('express');
const bodyParser = require('body-parser');
const cookiePaser = require('cookie-parser');
const userRoute = require('./routes/user.route');
const shortid = require('shortid');
const app = express();
const port = 8999;
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cookiePaser());
app.listen(port, () => console.log('App listenning on port ' + port));
app.use('/users', userRoute);
app.get('/', (req, res) => res.render('layouts/home'))
    // code below

/**
 * Cookies
 * => Set cookie and stored cookie on client
 */
app.get('/setcookie', (req, res, next) => {
    res.cookie("userSession", shortid.generate());
    res.send("saliughaluishd");
});