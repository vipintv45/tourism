var email = document.getElementById("exampleInputEmail1");
var psw = document.getElementById("exampleInputPassword1");
function validate()

{  
    
     let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ ;
    
            if(email.value=="" || psw.value=="")
                {
                    alert("Fields should not be empty");
                    return false;
                }
             else if(regexp.test(email.value))
                {
                    var psw1 = psw.value;
                    if(psw1.length<8)
                    {
                        if(psw1.length<4)
                               { document.getElementById("ine").innerHTML="Password is too short";
                                document.getElementById("ine").style.color = "red";
                                document.getElementById("exampleInputPassword1").style.borderColor = "red";
                                return false;}
                    else if(psw1.length>=4 && psw1.length<=7)
                                {document.getElementById("ine").innerHTML="Password is weak";
                                document.getElementById("ine").style.color = "orange";
                                document.getElementById("exampleInputPassword1").style.borderColor = "orange";
                                return false;}
                     }
                     else
                         {
                            document.getElementById("ine").innerHTML="Password strength is strong";
                            document.getElementById("ine").style.color = "green";
                            document.getElementById("exampleInputPassword1").style.borderColor = "black";
                          
                          var h =psw.value;
                         //  alert (h);
                          var n=psw.value.length;
                         //  alert(n);
                          if(n<8)
                          {
                              alert("password is too short");
                              return false;
                          }
                          else
                          {
                             var i=0;
                             var x=0,y=0,z=0;
                             var character='';
                             while (i <= n-1)
                             {
                                 character = h.charAt(i);
                                 if (!isNaN(character * 1))
                                 
                                 {
                                     x=1;
                                     console.log("number ok");
                                 }
                                 else
                                     {
                                     if (character == character.toUpperCase())
                                              {
                                                 console.log("uppercase ok");
                                                 y=1;
                                              }
                                     if (character == character.toLowerCase())
                                                {
                                                 console.log("lowercase ok");
                                                 z=1;
                                               }
                                     }
                                 i++;
                             }
                             if(x==0 && y==0 && z==1)
                             {
                                 alert("Password should contain atleast one number and uppercase character");
                                 return false;
                             }
                             if(x==0 && y==1 && z==0)
                             {
                                 alert("Password should contain atleast one number and lowercase character");
                                 return false;
                             }
                             if(x==1 && y==0 && z==0)
                             {
                                 alert("Password should contain atleast one uppercase and lowercase character");
                                 return false;
                             }
                             if(x==1 && y==1 && z==0)
                             {
                                 alert("Password should contain atleast  one lowercase character");
                                 return false;
                             }
                             if(x==0 && y==1 && z==1)
                             {
                                 alert("Password should contain atleast one number");
                                 return false;
                             }
                             if(x==1 && y==0 && z==1)
                             {
                                 alert("Password should contain atleast one uppercase character");
                                 return false;
                             }
                             if(x==1 && y==1 && z==1)
                             {
                                 alert("lOGIN SUCESSFULL");
                                 return true;

                             }
                              console.log(x,y,z);
                     
                          
                          
                         }
                        
                        
                }
                    
                }
                else 
                {

                    alert("email is invalid");
                    return false;
                }

    
}