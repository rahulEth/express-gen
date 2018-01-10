var jwt = require('jsonwebtoken');

var logout = (req, res) => {
    // console.log("qyu");
  var token =jwt.sign({id : ''} ,'abc123'  );
  //console.log("token1.",token);
 res.cookie('token' , ['', false] )
 return res.send({
 
 status : true ,
 message : 'logout successful' , 
 token :token,
 })

 } 


 module.exports = {logout}
 