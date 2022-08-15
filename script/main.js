
// let firstName = document.getElementById("fName").value;
// let lastName = document.getElementById("lName").value;
// let Email = document.getElementById("email").value;
// let pNumber = document.getElementById("phoneNo").value;
// let pwd = document.getElementById("password").value;
// let cPwd = document.getElementById("cPassword").value;

// console.log(`Firstname: ${firstName}`);
// console.log(`lastname: ${lastName}`);
// console.log(`Email: ${Email}`);
// console.log(`phone no: ${pNumber}`);
// console.log(`password: ${pwd}`);
// console.log(`confirm password: ${cPwd}`);







// function HandleSubmit(collector){

// }

HandleSubmit = (collector) => {

    //firstname validation
    if (collector.firstname.value.length < 6) {
        document.getElementById("fName").style.border = "1px solid tomato";
        document.getElementById("fnMessage").innerHTML = "Firstname should be more than 6 characters!";
        document.getElementById("fnMessage").style.display = "block";
        
    }
    else{
        document.getElementById("fName").style.border = "1px solid lightblue";
        document.getElementById("fnMessage").style.display = "none";
        console.log(collector.firstname.value)
    }

    //lastname validation
    if (collector.lastname.value.length < 5) {
        document.getElementById("lName").style.border = "1px solid tomato";
        document.getElementById("lnMessage").innerHTML = "Lastname should be more than 5 characters!"
        document.getElementById("fnMessage").style.display = "block";
        
    }
    else{
        document.getElementById("lName").style.border = "1px solid lightblue";
        document.getElementById("lnMessage").style.display = "none";
        console.log(collector.lastname.value)
    }

    //password Validation
    if (collector.password.value.length <= 8) {
        document.getElementById("password").style.border = "1px solid tomato";
        document.getElementById("pwdMessage").innerHTML = "Password should be 8 or above!";
        document.getElementById("pwdMessage").style.display = "block";
    }
    else{
        document.getElementById("password").style.border = "1px solid lightblue";
        document.getElementById("pwdMessage").style.display = "none";
        console.log(collector.password.value)
    }

    //Confirm Password Validation
    if (collector.password.value !== collector.cPassword.value ) {
        document.getElementById("cPassword").style.border = "1px solid tomato";
        document.getElementById("cPwdMessage").innerHTML = "Password Incorrect!";
        document.getElementById("cPwdMessage").style.display = "block";
    }
    else{
        document.getElementById("cPassword").style.border = "1px solid lightblue";
        document.getElementById("cPwdMessage").style.display = "none";
        console.log(collector.cPassword.value)
    }


    //Phone Number Validation
    if (collector.phoneNo.value.length <= 11) {
        document.getElementById("phoneNo").style.border = "1px solid tomato";
        document.getElementById("pnMessage").innerHTML = "Invalid! Number";
        document.getElementById("pnMessage").style.display = "block";
    }
    else{
        document.getElementById("phoneNo").style.border = "1px solid lightblue";
        document.getElementById("pnMessage").style.display = "none";
        console.log(collector.phoneNo.value)
    }

    //Email Vaildation
    if (collector.email.value != includes("@")) {
        document.getElementById("email").style.border = "1px solid tomato";
        document.getElementById("emailMessage").innerHTML = "Invalid! Email Address";
        document.getElementById("emailMessage").style.display = "block";
    }
    else{
        document.getElementById("email").style.border = "1px solid lightblue";
        document.getElementById("emailMessage").style.display = "none";
        console.log(collector.email.value)
    }
};

