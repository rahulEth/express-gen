function lout()
{
console.log("qwsdcftyhjk");

$.ajax({
url: 'api/logout',
type : 'GET',
headers :  {
  'Authorization' : "BEARER " + localStorage.getItem('testObject')
},
dataType : 'json',
  success: function(res) {
    console.log("qwertyui",res);
    if (res.status) {
      headers :  {
  authorization = ''
}
   console.log( "res" ,res.status);
//       'Authorization' = '';
        if (localStorage !== 'undefined' ){
          console.log("local storage" ,localStorage);
             
                    

    
        localStorage.removeItem('testObject')
      
        }
        alert(res.message);
        location.replace('/login');
        } 

       
},
error: function(err) {
    console.log('error' , err)
}  
});
};
