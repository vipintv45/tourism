var email = document.getElementById("exampleInputEmail1");
var psw = document.getElementById("exampleInputPassword1");





function validate()

{   let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ 
    
   if(email.value=="" || psw.value=="")
    
    {
        alert("fields should not be empty");
    }

   

    else if(regexp.test(email.value))
    {
        alert("email is valid");
    }

    else 
    {
        alert("email is invalid");
    }
    
}