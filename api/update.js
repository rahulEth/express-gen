const mongodb=require('mongodb');
var Todo =require('../model/todo');




var update = (req, res) =>{
    var  name = req.body.name;
    var  city = req.body.city;
    //console.log(name);
      Todo.findOneAndUpdate({name: name}, {city:city},function(err, doc){
          if(err){
              console.log("Something wrong when updating data!");
          }
      
          res.send(doc);
          console.log("document",doc);
      })

       };



    module.exports = {update}
