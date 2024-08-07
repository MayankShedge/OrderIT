console.log('script loaded')
function clearerrors(){
    var errors = document.getElementsByClassName('formerrors');
    for(let item of errors){
        item.innerHTML = "";
    }
}

function seterrors(error,id){
    var element = document.getElementById(id);
    element.getElementsByClassName('formerrors')[0].innerHTML = error;
}

function LValidate(){
    console.log("starting validation...")
    var returnval = true;
    clearerrors();

    //Validate Email
    var email = document.forms['myform']['femail'].value
    myexpress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!myexpress.test(email)){
        seterrors("*You have entered an invalid email address!","email");
        returnval = false;
    }   

    //Validate Password
    var pass = document.forms['myform']['fpass'].value
    if(pass.length < 6 || pass.length > 20 ){
        seterrors("*password too short","pass")
        returnval = false;
    }
    var myExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(!myExpression.test(pass)) {
        seterrors("*password should contain atleast one number and one special character","pass");
        returnval = false;
    }

    //Check password match
    var cpass = document.forms['myform']['fcpass'].value
    if(cpass != pass){
        seterrors("*Passwords do not match!","cpass");
        returnval = false;
    }

    console.log("Validation result:", returnval);

    return returnval;
}