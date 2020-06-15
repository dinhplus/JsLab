require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookiePaser = require('cookie-parser');
// const shortid = require('shortid');
const app = express();
const port = 8999;

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');
const middleware = require('./middlewares/auth.middleware');
const paginateMiddleware = require('./middlewares/productPaginate.middleware');
const productController = require("./controllers/product.controller")
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
app.use('/users', middleware.adminLogin, middleware.authMiddleWare, userRoute);

app.get('/', middleware.authMiddleWare, paginateMiddleware.paginate, productController.index)
app.use('/products', middleware.authMiddleWare, productRoute);

//admin login
app.use('/admin', middleware.authMiddleWare, authRoute);
// code below