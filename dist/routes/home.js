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
var homeRouter = new Router();
exports.homeRouter = homeRouter;
homeRouter.get('/home/', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    yield ctx.render('home', {
        title: '主页',
        fruits: ['苹果', '香蕉', '荔枝', '龙眼']
    });
}));
