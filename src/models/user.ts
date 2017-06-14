import mongoose =  require('mongoose');

//创建用户表n
var userSchema = new mongoose.Schema({name:String});

export var userModel =mongoose.model('User',userSchema);
