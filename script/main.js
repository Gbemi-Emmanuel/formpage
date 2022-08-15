
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
        
    }
    else{
        document.getElementById("fName").style.border = "1px solid lightblue"
        console.log(collector.firstname.value)
    }

    //lastname validation
    if (collector.lastname.value.length < 5) {
        document.getElementById("lName").style.border = "1px solid tomato";
        
    }
    else{
        document.getElementById("lName").style.border = "1px solid lightblue"
        console.log(collector.lastname.value)
    }

    //password validation
    if (collector.lastname.value.length < 5) {
        document.getElementById("lName").style.border = "1px solid tomato";
        
    }
    else{
        document.getElementById("lName").style.border = "1px solid lightblue"
        console.log(collector.lastname.value)
    }
};

