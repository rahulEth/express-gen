

 
    $.ajax(
        {
        
            url: 'api/profile',
            type : 'POST',
             dataType : 'json',
             headers :  {
             'Authorization' : 'BEARER ' + localStorage.getItem('testObject')
            },
        
             success: function(res) {
                 console.log("123",res.email);
                // window.location = '/profile';
               // console.log( document.getElementById('email'));
                  document.getElementById('email').innerText = res.email    ;
            },
            error: function(err) {
                console.log('error' , err)
            }  
        });
    