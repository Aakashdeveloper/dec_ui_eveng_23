function validateFname(){
    let fname = document.getElementById('fname').value;
    let fout = document.getElementById('fout');
    if(fname.trim().length === 0){
        fout.innerText = "Please Enter First Name"
    }else{
        fout.innerText = ""
    }
}


const validateEmail = () => {
    let email = document.getElementById('email').value;
    let eout = document.getElementById('eout');
    if(email.trim().length === 0){
        eout.innerText = "Please Enter Email"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            eout.innerText = "Please Enter Valid Email"
        }else{
            eout.innerText = ""
        }
    }
}