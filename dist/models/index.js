"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
// 连接本地数据库
mongoose.connect('mongodb://118.89.38.111:27017/test');
var user_1 = require("./user");
exports.userModel = user_1.userModel;
