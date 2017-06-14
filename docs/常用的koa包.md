# 常用的Koa包
|包名|作用|
|---|---|
|koa-logger|日志|
|koa-static|静态文件服务器|
|koa-bodypaser|解析post请求体|
|koa-router | 分发路由|



默认会到处index.ts

引入包名时会自动引入包下的index.ts/.js,而一般情况下会把将当前文件夹下的其他文件通过index.ts/js导出

比如routes文件夹结构如下

routes
* index.ts
* home.ts
* blog.ts

那么
```js
// 导入 routes下的index.ts
import   './routes';
```

```bash
#  等价于 tsc --watch
tsc -w 
```