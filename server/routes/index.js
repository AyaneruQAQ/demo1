var express = require('express');
var router = express.Router();
var md5 = require('md5-node')//加密密码
const {UserMsg} = require('../models/usermsg')
const filter = {password:0,__v:0}//过滤，键值设置为0表示不显示该项，非0（一般为1）显示
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // next()
});

router.post('/register',function(req,res){
  const {username,password,type} = req.body
  console.log(req.body)
  UserMsg.findOne({username},function(err,user){
    if(user){
      res.send({code:1,msg:'用户已存在'})
    }else{
      new UserMsg({username,password:md5(password),type}).save(function(err,user){
        res.cookie('userid',user._id,{maxAge:1000*60*60*24})
        const data = {username,type,_id:user._id}
        res.send({code:0,data})
      })
    }
  })
})

/*
'/login?id=123'
req.query.id
'/login/123'
req.params.name
*/

router.post('/login',function(req,res){
  const {username,password} = req.body
  console.log("cookies  "+req.cookies.userid)
  UserMsg.findOne({username,password:md5(password)},filter,function(err,user){
    if(user){
        res.cookie('userid',user._id,{maxAge:1000*60*60*24})
        // const data = {username,type,_id:user._id}
        res.send({code:0,data:user})
    }else{
        res.send({code:1,msg:'用户名或密码错误'})
    }
  })
})

module.exports = router;
