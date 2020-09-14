const Router = require("@koa/router");
const homeController = require("./controllers/homeController");
var router = new Router();



router.get("/getting", async ctx => {
    ctx.send = ctx;
    ctx.body = ctx;
    // console.log(ctx);

});
router.get("/home", homeController.index);

module.exports = router