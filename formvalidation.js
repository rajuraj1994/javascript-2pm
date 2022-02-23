function fnameValidate(){
    let first_name= document.getElementById('fname').value
    if(first_name==""){
        displayMsg('firstname is mandatory','fnameMsg','red')
        return false
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg('firstname only contains alphabets','fnameMsg','red')
        return false
    }
    else if(first_name.length<3){
        displayMsg('firstname must be more than 2 characters','fnameMsg','red')
        return false
    }
    else{
        displayMsg('valid firstname','fnameMsg','green')
        return true
    }
}

function lnameValidate(){
    let last_name= document.getElementById('lname').value
    if(last_name==""){
        displayMsg('lastname is mandatory','lnameMsg','red')
        return false
    }
    else if(!last_name.match(/^([A-Z])+([a-z])+$/)){
        displayMsg('lastname only contains alphabets and start with uppercase letter','lnameMsg','red')
        return false
    }
    else if(last_name.length<3){
        displayMsg('lastname must be more than 2 characters','lnameMsg','red')
        return false
    }
    else{
        displayMsg('valid lastname','lnameMsg','green')
        return true
    }
}

function emailValidate(){
    let email= document.getElementById('email').value
    if(email==""){
        displayMsg('email is mandatory','emailMsg','red')
        return false
    }
    //ram09.hari@gmail.
    else if(!email.match(/^([a-z0-9])[a-z0-9\_\-\.]+\@+(([a-z])+\.)+([a-z])/)){
        displayMsg('invalid email format','emailMsg','red')
        return false
    }
    else{
        displayMsg('valid email','emailMsg','green')
        return true
    }
}

function passwordValidate(){
    let password= document.getElementById('password').value
    if(password==""){
        displayMsg('password is mandatory','passwordMsg','red')
        return false
    }
   else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$&-_.?!]).{8,}$/)){
       displayMsg('password format should be like A@#er34 and minimum of 8 characters','passwordMsg','red')
       return false
   }
    else{
        displayMsg('valid password','passwordMsg','green')
        return true
    }
}

function displayMsg(msg,id,colorValue){
    document.getElementById(id).innerHTML=msg
    document.getElementById(id).style.color=colorValue
}


function validForm(){
    if(fnameValidate() && lnameValidate() && emailValidate() && passwordValidate()){
        return true
    }
    else{
        return false
    }
}