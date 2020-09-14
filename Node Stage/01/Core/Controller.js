const Koa = require("koa");
app = new Koa;

// class Controller {
//     constructor() {
//         this.prototype = new Controller;

//     };

async function render(ctx, content) {
    // return app.use(dir, async(ctx, next) => {
    //     // await next();
    //     ctx.body = content;
    //     ctx.status = 200;
    // })
    console.log(dir);
    ctx.body = content;
    await next();
}

function send(dir, data) {
    return app.use(dir, async(ctx, next) => {
        await next();
        ctx.data = data;
        ctx.status = 200;
    })
}

module.exports = { render, send };