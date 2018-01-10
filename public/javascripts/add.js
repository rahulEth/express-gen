function add()
{
var n = document.getElementById("name").value;
var c = document.getElementById("city_name").value;
//var retrievedObject = localStorage.getItem('testObject')

$.ajax({
url: 'api/add',
type : 'POST',
 dataType : 'json',
 headers :  {
  'Authorization' : "BEARER " + localStorage.getItem('testObject')
}, 
  
data : {name : n, city : c},
  success: function(data) {
    
    console.log(  "hars" ,data)   
    fetchAll();
},
error: function(err) {
    console.log('error' , err)
}  
});
};

