var fname = document.getElementById('fullname');
var nm_err = document.getElementById('nam_error');

var email = document.getElementById('email_address');
var eml_err = document.getElementById('email_error');
var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


var pass = document.getElementById('password');
var pass_err = document.getElementById('password_error');
var upper = /[A-Z]/;
var lower = /[a-z]/;
var number = /[0-9]/;

var con_pass = document.getElementById('conform_password');
var con_pass_err = document.getElementById('conform_pasword_error');


function sub(){
    if(fname.value == ''){
        nm_err.innerHTML = 'your name ?';
        fname.style.border = '1px solid red';
        fname.focus();
        return false;
    }
    else if (email.value == ''){
        eml_err.innerHTML = 'your email ?';
        email.style.border = '1px solid red';
        email.focus();
        return false;

    }
    else if (!regex.text(email.value)){
        eml_err.innerHTML = 'your email Wrong !';
        email.style.border = '1px solid red';
        email.focus();
        return false;

    }
    else if(pass.value == '') {
        pass_err.innerHTML = 'your password ?';
        pass.style.border = '1px solid red';
        pass.focus();
        return false;
    }

    else if(!upper.test(pass.value) || !lower.test(pass.value) ||!number.test(pass.value) || pass.value.length < 8) {
        pass_err.innerHTML = 'your uppercase ! lowerecase !number! 8 character! He has to pay more';
        pass.style.border = '1px solid red';
        pass.focus();
        return false;
    }
    else if(pass.value == '') {
        pass_err.innerHTML = 'You have to enter the password';
        pass.style.border = '1px solid red';
        pass.focus();
        return false;
    }
    else if(pass.value != con_pass.value) {
        con_pass.innerHTML = 'You have to enter the password';
        con_pass.style.border = '1px solid red';
        con_pass.focus();
        return false;
    }
}


function showpass(){
    var x = document.getElementById('password');
    if(x.type === 'password'){
        x.type ='text';
    }
    else{
        x.type = 'password';
    }
}