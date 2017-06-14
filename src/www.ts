import koa = require('koa');
import staitcServer = require('koa-static');
import path = require('path');
import bodypaser = require('koa-bodyparser');
import logger = require('koa-logger');
import views = require('koa-views');
import {homeRouter} from './controllers';

//导入数据库
import './models';

var app =new  koa();

// 日志
app.use(logger());
app.use(bodypaser());
// 开放根目录下的public,node_modules 文件夹为静态文件服务器
app.use(staitcServer(path.resolve(__dirname,'../public')));
app.use(staitcServer(path.resolve(__dirname,'../node_modules')));
// 使用swig模板渲染html文件
app.use(views(path.resolve(__dirname,'../')+'/views',{
    map:{html:'swig'}
}));


// 路由
app.use(homeRouter.routes());


app.listen(3000,()=>{
    console.log('server is running on 3000');
});
