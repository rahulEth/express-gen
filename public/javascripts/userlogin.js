

function sigin()
{
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
console.log(email, password);

$.ajax(
{

url: 'api/userlogin', 
dataType : 'json',
type : 'POST',
data : {email : email , password : password  },


success : function(result)
{
  localStorage.setItem('testObject',result.token) ;
  console.log("result:" ,result);
  
    if(result.status) {
      
        
     alert(result.message);
window.location = "/data"

    } 
   else {  

 alert(result.message);  
   } 
 
   console.log(result);
   fetchAll();
   },

error : function(error){

   console.log(error);
}



});


};