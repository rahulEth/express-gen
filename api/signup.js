var User = require('../model/user');


var signup =  (req, res) => {

    var user = new User(
        {

        email: req.body.email,
        password : req.body.password


} );
console.log(user);
//console.log( "user" ,  user);
user.save().then((user) => {
res.send({status :true ,message : 'signup successful', data : user });
console.log("user" , user);
  //  return user.generateAuthToken();
}).catch((e) => {
    console.log(e);

}  )
};



module.exports = {signup};
