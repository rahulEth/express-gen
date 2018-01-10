var mongoose = require('mongoose');
  
var Todo = mongoose.model('Todo' ,{

    name : {
        type : String,
        required : true ,
        minlength : 1,
        trim : true 
      
        },

    city : {
    type : String,
    required : true ,
    minlength : 1,
    trim : true 
  
    },
    email : {
        type : String,
        minlength : 1,
        trim : true 
      
        },  

     complete: {
        type : Boolean,
        default : false

     }  ,

     completedAt : {
      type : Number ,
      default : null
     }



})



module.exports = Todo