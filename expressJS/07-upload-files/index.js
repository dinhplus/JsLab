require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookiePaser = require('cookie-parser');
const multer = require('multer');
var uploadMedia = multer({
    dest: 'public/uploads/media',
});
var uploadDoc = multer({
    dest: 'public/uploads/document',
});
const shortid = require('shortid');
const app = express();
const port = 8000;

const sessionMiddleware = require('./middlewares/session.middleware');
const cartMiddlerware = require('./middlewares/cart.middleware');
const middleware = require('./middlewares/auth.middleware');
const paginateMiddleware = require('./middlewares/productPaginate.middleware');

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');
const cartRoute = require('./routes/cart.route');

const productController = require('./controllers/product.controller');

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
// app.use(cookiePaser());
app.use(sessionMiddleware);
app.listen(port, () => console.log('App listenning on port ' + port));
app.use('/users', middleware.adminLogin, middleware.authMiddleWare, userRoute);

app.get(
    '/',
    middleware.authMiddleWare,
    paginateMiddleware.paginate,
    productController.index
);
app.use(
    '/products',
    middleware.authMiddleWare,
    uploadMedia.single('image'),
    productRoute
);

//admin login
app.use('/admin', middleware.authMiddleWare, authRoute);
// code below
/**
 * Cart route;
 */
app.use('/cart', cartMiddlerware.goShopping, cartRoute);