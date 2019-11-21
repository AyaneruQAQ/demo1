// Models/users.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明一个数据集 对象
var userSchema = new Schema({
    username:String,
    password:String,
    age:Number
});
// 将数据模型暴露出去
module.exports = mongoose.model('usermsg', userSchema);
//!!!!!注意：此处导出的模型名称需与数据库对应，这里为usermsg
//则查找的集合为它的复数形式usermsgs