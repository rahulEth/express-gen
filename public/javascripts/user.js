




 var  sigup  = ()=>{
 {
 var email = document.getElementById("email").value;
 var password = document.getElementById("password").value;


$.ajax(
{

url: '/api/user',
dataType : 'json',
type : 'POST',
data : {email : email , password : password},
success : function(result)
{
    
    if(result.status){
    console.log(result);

    window.alert(result.message);
    }
    //fetchAll();
},

error : function(error){

    console.log(error);
}

});


 };
 }
 //module.exports= signup;
