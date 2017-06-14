import { userModel } from './user';
import mongoose = require('mongoose');

// 连接本地数据库
mongoose.connect('mongodb://localhost:27017/test');


export {userModel} from './user';

