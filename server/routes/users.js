var express = require('express');
var router = express.Router();
var usermsg = require('../models/usermsg')
/* GET users listing. */
router.get('/msg', function(req, res, next) {
  let datas={
    username:'lizz'
  }
  usermsg.find({},(err,data)=>{
    if(err){
      console.log('11'+err)
    }
    if(data){
      res.json(data);
      
    }
  })
  // res.json({msg:'first!!!!'})
});

module.exports = router;
