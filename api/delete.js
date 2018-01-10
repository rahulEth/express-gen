var Todo = require('../model/todo');
var delet  = (req,res) =>{

  console.log("req",req.body);
  var name =req.body.name;
  var city =req.body.city;
  console.log("namecity" , name,city);
  Todo.findOneAndRemove({name : name, city : city}  , function (err, result ){
    console.log("res");
  res.send(result);

    if(err){
      console.log("somthing went wrong ");
    }
    console.log("delte");
  }).catch((e) => {
    console.log(e);
  })
}
module.exports = {delet}