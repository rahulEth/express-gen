
var Todo = require('../model/todo');

var fetch = (req,res)=>{
    //console.log("fetch data" ,req.currentUser);
        
   //  console.log(req.currentUser.email);
        
        //console.log("city",name);  
        Todo.find({email:req.currentUser.email}).then((success) =>{
          //  console.log(success);
            res.send(success);
        }).catch((error)=>{
          res.send(error);
        })
    }


    module.exports = {fetch}