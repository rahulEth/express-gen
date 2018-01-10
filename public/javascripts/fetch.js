 fetchAll = () =>{
      // var email = document.getElementById().value;
           //var email =  localStorage.getItem('testObject')
   
          $.ajax({
          url : 'api/fetch',
          type : 'POST',
          dataType : 'json',
          headers :  {
            'Authorization' : "BEARER " + localStorage.getItem('testObject')
          },
          // data : {email :email},
          success : function(data)
            {
          //   console.log("msg: " , data)
            var c = data;
          //var c = data.reverse();
          //console.log(c[0].city, c[0].name);
            var html = "";
              for(var i= 0; i< c.length ; i++)
              {
            
                html += `<tr id="row${i}">`; 
                html += `<td id="name${i}">` + c[i].name + '</td>'   ;
                html += `<td id="city${i}">` +c[i].city + '</td>';
                html += '<td >' + `<button id ="delete${i}" value = "delete"  onclick="delet(this.id)" >delete</button>` + '</td>'
                html += '<td>' + `<button id="edit${i}" value = "edit"  onclick="edit(this.id)" >edit</button>` + '</td>'
                html += '<td>' + `<button id="update${i}"  onclick="update(this.id)" >update</button>` + '</td>'
                html += '</tr>' ;
              }
                html += '</br>' 
          
                document.getElementById("table_entries").innerHTML = html;
          
          },
          
          
                error : function(error)
                  {
                   console.log('errors' , error);
                  }
          } )
   };

// function update(id){

// }
function delet(id)
   {
      var str =id;
      console.log(str);
    var arr = str.match(/.{1,6}/g); 
    
      console.log(arr);
      //console.log(`"name${arr[1]}"`);
      var n = document.getElementById(`name${arr[1]}`).innerHTML;
      var c = document.getElementById(`city${arr[1]}`).innerHTML;
      console.log(  "show me" ,n,c);
      {
          $.ajax(
          {
                url: '/api/delete',
                method : 'POST',
                dataType :'json',
                data : {name : n , city :c},
                headers :  {
                  'Authorization' : "BEARER " + localStorage.getItem('testObject')
                        }, 
                success: function(result) {
                            console.log("res" ,result);
                            fetchAll();
                                    },
                error: function(error) 
                     {
                    console.log(error);
                     } 
          })

      }
    }

 

//   function update(id)
// {
//   var str =id;
//   var arr = str.match(/.{1,6}/g); 
//   console.log(arr);
//   console.log(`name${arr[1]}`);
//   var n = document.getElementById(`name${arr[1]}`).innerHTML;
//   //var c = document.getElementById(`city${arr[1]}`).innerHTML;
//   console.log(n);

//   $.ajax(
//   {
//   url: 'api/update',
//   method : 'POST',
//   dataType :'json',
//   data : {name : n},
//   headers :  {
//     'Authorization' : "BEARER " + localStorage.getItem('testObject')
//   },
//   success: function(result) {
//             console.log(result);
//       fetchAll();
//         },
//   error: function(error){
//       console.log(error);
//   } 
//   })
// }

function edit(id)
{
  var str =id;
  var arr = str.match(/.{1,4}/g); 
 // console.log(arr);
  console.log(`name${arr[1]}`);
  document.getElementById(`name${arr[1]}`).setAttribute("contenteditable",true);
  document.getElementById(`city${arr[1]}`).setAttribute("contenteditable",true);
  document.getElementById(`name${arr[1]}`).focus();
}
  //console.log(n);
function update(id){
  var str =id;
  var arr = str.match(/.{1,6}/g); 
 
  var n= document.getElementById(`name${arr[1]}`).innerHTML;
 var c= document.getElementById(`city${arr[1]}`).innerHTML;
  $.ajax(
  {
  url: 'api/update',
  method : 'POST',
  dataType :'json',
  data : {name : n, city:c},
  headers :  {
    'Authorization' : "BEARER " + localStorage.getItem('testObject')
  },
  success: function(result) {
            console.log(result);
      fetchAll();
        },
  error: function(error){
      console.log(error);
  } 
  })
}
