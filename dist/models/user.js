"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
//创建用户表n
var userSchema = new mongoose.Schema({ name: String });
exports.userModel = mongoose.model('User', userSchema);
