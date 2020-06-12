const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user.route');
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
app.listen(port, () => console.log('App listenning on port ' + port));
app.use('/users', userRoute);
// code below