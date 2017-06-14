import { userModel } from './user';
import mongoose = require('mongoose');

// 连接本地数据库
mongoose.connect('mongodb://118.89.38.111:27017/test');


export {userModel} from './user';

