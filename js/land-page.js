//Select element function
const selectElement = function (element){
    return document.querySelector(element);
}

let loginBtn = selectElement('.login-btn');
let loginModal = selectElement('.login-modal');
let loginClose = selectElement('.close-login');
let signinBtn = selectElement('.sign-in-btn');
let signinModal = selectElement('.sign-in-modal');
let signinClose = selectElement('.close-sign-in');

loginBtn.addEventListener('click', function(){
    loginModal.classList.toggle('open-login')
});

loginClose.addEventListener('click', function(){
    loginModal.classList.toggle('open-login')
});

signinBtn.addEventListener('click', function(){
    signinModal.classList.toggle('open-sign-in')
});

signinClose.addEventListener('click', function(){
    signinModal.classList.toggle('open-sign-in')
});



