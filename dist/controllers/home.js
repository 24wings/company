"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const models_1 = require("../models");
var homeRouter = new Router();
exports.homeRouter = homeRouter;
homeRouter.get('/', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    //返回所有的用户
    var users = yield models_1.userModel.find().exec();
    yield ctx.render('index', {
        title: '主页',
        fruits: ['苹果', '香蕉', '荔枝', '龙眼'],
        users: users
    });
})).post('/home', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    var { name } = ctx.request.body;
    var newUser = yield new models_1.userModel({ name }).save();
    ctx.body = { ok: true, data: "新增用户成功" };
}));
