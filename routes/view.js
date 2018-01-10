var express = require('express');
var router = express.Router();
var jwt  = require('jsonwebtoken');
var User = require('../model/user');

// var add = require('../public/javascripts/add');
// var delet = require('../public/javascripts/delete');
// var logout = require('../public/javascripts/logout');
// var profile = require('../public/javascripts/profile');
// var update = require('../public/javascripts/update');
//var user = require('../public/javascripts/user');
// var userlogin = require('../public/javascripts/userlogin');


var verifyToken=function(req,res,next){
  if(req.cookies.token){

    var token = req.cookies.token;
     //tokenStatus   =req.cookies.token[1];
    console.log("tkn" ,token);
    if (token && token!=undefined) {
      if (!token)return res.redirect('/');
      jwt.verify(token,'abc123', function(err, decoded) {
          console.log("msg" , decoded);
        if (err)return res.redirect('/');
          User.findOne({_id: decoded._id}).then(function(res){

                      console.log(res);
            if(res==null || res=='')return res.redirect('/');
            if(res){

              req.currentUser = res;
      
                  //  console.log("mreq.currentUser);
              // console.log("test", res );
              // console.log('req.currentUser',req.currentUser.publickey);
              return next();
            }
          }).catch(function(err){
            return res.redirect('/');
          });
      });
    }
    else {
      return res.redirect('/');
    }
  }else {
    return res.redirect('/');
  }
};





/* GET users listing. */

//router.get('/logout' ,verifyToken,logout.logout);

/*route.post();
 */ 

router.get('/data',verifyToken, function(req, res, next) {
  res.render('datapage');
}); 
router.get('/profile', verifyToken,function(req, res, next) {
  res.render('profile');
}); 


router.get('/login', function(req, res, next) {
  res.render('userlogin');
}); 

router.get('/signup', function(req, res, next) {
  res.render('user');
}); 

  module.exports = router;
