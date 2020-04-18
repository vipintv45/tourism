var email = document.getElementById("inputEmail4");
var psw = document.getElementById("inputPassword4");
var phn = document.getElementById("inputphone");
function validate()

{  
    
     let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ ;
    
            if(email.value=="" || psw.value=="" || phn.value=="")
                {
                    alert("Email,Password and Phone numbers fields are mandatory");
                    return false;

                }
             else if(regexp.test(email.value))
                {
                    
                    
                    var psw1 = psw.value;
                    if(psw1.length<8)
                    {
                        
                        if(psw1.length<4)
                               {
                                    document.getElementById("ine").innerHTML="Password is too short";
                                document.getElementById("ine").style.color = "red";
                                document.getElementById("inputPassword4").style.borderColor = "red";
                                return false;
                                }
                    else if(psw1.length>=4 && psw1.length<=7)
                                {document.getElementById("ine").innerHTML="Password is weak";
                                document.getElementById("ine").style.color = "orange";
                                document.getElementById("inputPassword4").style.borderColor = "orange";
                                return false;}
                     }
                     else
                         {
                          
                          var h =psw.value;
                         //  alert (h);
                          var n=psw.value.length;
                         //  alert(n);
                          if(n<8)
                          {
                              alert("Password is too short");
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
                                document.getElementById("ine").innerHTML="Password is strong";
                                document.getElementById("ine").style.color = "green";
                                document.getElementById("inputPassword4").style.borderColor = "black";
                                      {  var phn1 ;
                                        var count = (phn.value.match(/\d/g) || []).length;
                                                if(count==10)
                                                    {
                                                        phn1=phn.value;
                                                        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                                                        if(phn1.match(phoneno))
                                                        {
                                                            alert("SIGNUP SUCESSFULL");
                                                            return true;
                                                            
                                                        }
                                                        else{alert("Phone number should contain only digits,dots(.) and hyphens(-) and the supported formats are   XXXXXXXXXX      XXX.XXX.XXX      XXX-XXX-XXXX       XXX XXX XXX")}
                                                            return false;
                                                    }
                                                else if(count> 10)
                                                    {
                                                        alert("Phone number should contain 10 digits only");
                                                        return false;
                                                    }
                                                else if(count<10)
                                                    {
                                                        alert("Phone number should contain 10 digits");
                                                        return false;

                                                    }    
                                                }   
                            
    
    
    
    
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