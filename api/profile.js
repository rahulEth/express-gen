

var profile =  (req, res) => {
       
    console.log("email" ,req.currentUser.email);
    res.status(200).send({email:req.currentUser.email});



}

module.exports ={profile} 