var Todo = require('../model/todo')

var add = (req,res) =>{
    //console.log('1')

    //  console.log(req.body.name);
    //  console.log(req.body.city);
//         console.log("this",req.currentUser);
//console
var todo = new Todo(
    {
      name : req.body.name,
      city : req.body.city,
      email : req.currentUser.email
    });
    console.log(todo);
todo.save().then((result) =>{
  res.send(result);
}).catch(function(err){
    console.log("err",err)
})
}

module.exports = {add};