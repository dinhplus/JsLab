const { render, send } = require('../Core/Controller');

module.exports.index = async(ctx, next) => {

    ctx.body = `
        <h1> ahihi </h1>


    `;
    // await render(ctx, "ahihihih");
    await next();
}

// module.exports = homeController;