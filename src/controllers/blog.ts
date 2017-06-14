import Router = require('koa-router');

var blogRouter = new Router();
blogRouter.get('/blog',async(ctx,next)=>{
    ctx.body={ok:true,data:'测试成功'}
});

export {blogRouter}

