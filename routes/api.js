

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User =require('../model/user');
var Todo =require('../model/todo');
 var add = require('../api/add');
 var update = require('../api/update');
var userlogin = require('../api/userlogin');
var signup = require('../api/signup');      //signup
 var logout = require('../api/logout');
 var delet = require('../api/delete');
 var fetch = require('../api/fetch');
 var profile = require('../api/profile');

var verifyTokenAPI = function(req, res, next){
    

    var authorizationHeader = req.headers['authorization'];
    
       console.log("msg" ,authorizationHeader);
    if(authorizationHeader){
    
        token = authorizationHeader.split(' ')[1];
       // console.log(token);
        if( token) {
    
    jwt.verify(token , 'abc123', function(err,decoded){
        
        //console.log(decoded)
        // console.log("decpp:" ,typeof decoded);
    if(err)   return res.send({status : false , message : 'failed to authorize token'});
    User.findOne({_id : decoded._id} ).then( function (res) {
        //console.log("decpp:" ,res);
        if(!res || res == ''){
           return res.send({status : false, message : "user not found" }) }
       if(res)
    {
        // console.log("result: ", res  );
        req.currentUser = res;
        console.log("2" ,res);
        return next();
    }  
    }).catch( (err) => {
    res.send({status : false , message : "user not found some error occure" })
    
    } ); 
    
    });
    }  else { return   res.send({status: false , message : 'no token porvided'})
    
    } }  
    else {
       return res.send({status: false , message : 'authorization token not provided'})
    
    }  };  

    // var verifyToken=function(req,res,next){
    //     if(req.cookies.token){
      
    //       var token = req.cookies.token;
    //        //tokenStatus   =req.cookies.token[1];
    //       console.log("tkn" ,token);
    //       if (token && token!=undefined) {
    //         if (!token)return res.redirect('/login');
    //         jwt.verify(token,'abc123', function(err, decoded) {
    //             console.log("msg" , decoded);
    //           if (err)return res.redirect('/login');
    //             User.findOne({_id: decoded._id}).then(function(res){
      
    //                         console.log(res);
    //               if(res==null || res=='')return res.redirect('/login');
    //               if(res){
      
    //                 req.currentUser = res;
            
    //                     //  console.log("mreq.currentUser);
    //                 // console.log("test", res );
    //                 // console.log('req.currentUser',req.currentUser.publickey);
    //                 return next();
    //               }
    //             }).catch(function(err){
    //               return res.redirect('/login');
    //             });
    //         });
    //       }
    //       else {
    //         return res.redirect('/login');
    //       }
    //     }else {
    //       return res.redirect('/login');
    //     }
    //   };
      





// /* GET home page. */
router.get('/', function(req, res, next) {

  res.render('datapage', { title: 'Express' });

});

router.post('/fetch',verifyTokenAPI ,fetch.fetch); //
//,verifyTokenAPI
 router.post('/user',signup.signup);      //signup  
router.post('/userlogin',userlogin.userlogin);
router.post('/add', verifyTokenAPI ,add.add);  //
router.post('/delete',verifyTokenAPI, delet.delet)  //,verifyTokenAPI
router.post('/update' ,update.update);//,verifyTokenAPI
router.post('/profile',verifyTokenAPI, profile.profile);
router.get('/logout' ,verifyTokenAPI,logout.logout);


module.exports = router






