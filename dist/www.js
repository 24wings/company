"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa = require("koa");
const staitcServer = require("koa-static");
const path = require("path");
const bodypaser = require("koa-bodyparser");
const logger = require("koa-logger");
const views = require("koa-views");
const controllers_1 = require("./controllers");
//导入数据库
require("./models");
var app = new koa();
// 日志
app.use(logger());
app.use(bodypaser());
// 开放根目录下的public,node_modules 文件夹为静态文件服务器
app.use(staitcServer(path.resolve(__dirname, '../public')));
app.use(staitcServer(path.resolve(__dirname, '../node_modules')));
// 使用swig模板渲染html文件
app.use(views(path.resolve(__dirname, '../') + '/views', {
    map: { html: 'swig' }
}));
// 路由
app.use(controllers_1.homeRouter.routes());
app.listen(3000, () => {
    console.log('server is running on 3000');
});
