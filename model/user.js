var mongoose = require('mongoose');
var validator = require('validator');
var jwt = require('jsonwebtoken');
  var UserSchema =new mongoose.Schema({

   email : {
    
            type : String ,
            required: true ,
            minlength : 1,
            trim : true,
            // //unique : true ,
            //  /*validate : {
            // validator : validator.isEmail,
            // message :   '{value} is not valid' 
            // } */
         
        },
    
    password : {
    
       type : String,
       required: true ,
       minlength : 6,
       trim : true, 
       
    
    },
    
    /*tokens : [{ 
    access :{ 
        type:   String,
        required : true
       },
    token : {
    
    type : String,
    required : true
    
    }   
    
    }],*/  
     
    
    completed  : {
    
    type : Boolean ,
    default : null
    
    },
    completedAt  : {
    
        type : Number ,
        default : null
        
        },
    
    } ) 
    
    UserSchema.methods.generateAuthToken =function()
    {
     var user =this;
     //var access ='auth';
     var token = jwt.sign({_id: user._id.toHexString() } , 'abc123').toString() ;
     return token ;
    } 

var User = mongoose.model('User',UserSchema );


module.exports = User;