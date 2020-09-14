"use strict";
require("dotenv").config({ path: ".env" });
const Koa = require('koa');
// const bodyParser = require("@koa/body-parser");
// const compress = require("@koa/compress");
// const cors = require("koa-cors");


const app = new Koa();
const router = require("./router.js");

app.use(router.routes()).use(router.allowedMethods());
app.listen(8000);