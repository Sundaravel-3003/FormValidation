const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if(usernameVal===''){
        setError(username,'Please enter the username');
    }
    else{
        setSuccess(username);
    }

    if(emailVal===''){
        setError(email,'Enter the email');
    }
    else if(!validateEmail(emailVal)){
            setError(email,'please enter a valid email');
    }
    else{
        setSuccess(email);
    }

    if(passwordVal.length<8){
        setError(password,'Enter a password more than 8 characters long');
    }else{
        setSuccess(password);
    }

    if(cpasswordVal===''){
        setError(cpassword,'enter the password');
    }
    else if(cpasswordVal!==passwordVal){
        setError(cpassword,'Password does not match');
    }else{
        setSuccess(cpassword);
    }

}

function setError(element,message){
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector('.error');
 
    errorElement.innerText = message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');

}

function setSuccess(element){
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector('.error');
 
    errorElement.innerText = '';
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');

}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };