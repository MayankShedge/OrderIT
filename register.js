function clearErrors(){
    errors = document.getElementsByClassName('formerrors');
    for(let item of errors){
        item.innerHTML = '';
    }
}

function setErrors(id , error){
    var element = document.getElementById(id);
    element.getElementsByClassName('formerrors')[0].innerHTML = error;
}

function RValidate(){
    var returnval = true;
    clearErrors();

    //Validate name
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5 || name.length == 0) {
        seterror("name", "*Length of name is too short or enter a name");
        returnval = false;
    }

    //validate email
    var email = document.forms['myform']['femail'].value
    myexpress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!myexpress.test(email)){
        seterrors("email" , "*You have entered an invalid email address!");
        returnval = false;
    } 
    
    //Validate Phone Number
    var phno = document.forms['myform']['fphno'].value;
    if(!(/^[1-9]{1}[0-9]{9}$/).test(phno) && phno.length < 10) {
        seterrors("phone","*Please provide a valid phone number");
        returnval = false;
    }    

    //Validate Address
    var add = document.forms['myform']['faddress'].value;
    if(add.length == 0){
        setErrors("address" , "*Please enter your address");
        returnval = false;
    }

    return returnval;
}