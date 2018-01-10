var User =require('../model/user');

var userlogin = (req, res) => {
    //console.log(req.body);
     var user =new User({
        email:req.body.email,
        password: req.body.password,
        testObject: req.body.email     
    
         
    })
    //console.log("data" ,user);
     
    
    
    User.findOne({email:req.body.email}).then((doc) => {
    
    if(doc){
    
         var token = doc.generateAuthToken();
         console.log(token);
         res.cookie('token',token );
        //   console.log(token);
    res.send({status:true , message : "welcome user" ,token :token });//, 
    
    
    console.log('user found');
    }
      else {
           res.send({status :false ,message : "user not found please signup" });  
           console.log("user not found");
      }
    }).catch((e) => {
        console.log(e);
    })
    }  


    module.exports = {userlogin}