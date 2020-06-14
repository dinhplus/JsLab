require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookiePaser = require('cookie-parser');
const shortid = require('shortid');
const app = express();
const port = 8999;

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const middleware = require('./middlewares/auth.middleware');

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cookiePaser(process.env.SESSION_SECRET));
app.listen(port, () => console.log('App listenning on port ' + port));
app.use('/users', middleware.authMiddleWare, userRoute);
app.get('/', middleware.authMiddleWare, (req, res) =>
    res.render('layouts/home')
);
app.use('/login', authRoute);
// code below