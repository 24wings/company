import Router = require('koa-router');
import {userModel} from '../models';

var homeRouter = new Router();
homeRouter.get('/home/',async(ctx,next)=>{
    //返回所有的用户
    var users = await userModel.find().exec();
    await ctx.render('home',{
        title:'主页',
        fruits:['苹果','香蕉','荔枝','龙眼'],
        users:users
    });
    

}).post('/home',async(ctx,next)=>{
      var {name} =  ctx.request.body;
    
   var newUser = await new userModel({name}).save();
    ctx.body={ok:true,data:"新增用户成功"}

})

export {homeRouter}

