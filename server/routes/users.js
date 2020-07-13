var express = require('express');
var router = express.Router();
var {UserMsg} = require('../models/usermsg')
/* GET users listing. */
router.get('/msg', function(req, res, next) {
  let datas={
    username:'lizz',
    password:'123',
    age:18
  }
  // let info = new usermsg(datas)
  // info.save();//存数据
  UserMsg.find({},{password:0},(err,data)=>{//查数据
    if(err){
      console.log('11'+err)
    }
    if(data){
      res.json(data);
      
    }
  })
  // usermsg.findByIdAndUpdate()//更新数据
  UserMsg.remove({username:'mickey'},(err,doc)=>{
    console.log('remove',err,doc);//{n:删除条目数,ok:1}
  })//删除数据
  // res.json({msg:'first!!!!'})
});

module.exports = router;
