//Select element function
const selectElement = function (element){
    return document.querySelector(element);
}

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open')
});

let eraBtn = selectElement('.era-btn');
let eradropDown = selectElement('.era-list');
let eraLink = selectElement('.era-link');
let philoContainer = selectElement('.philo-container');
let philoBtn = selectElement('.philo-btn');
let philodropDown = selectElement('.philo-list');
let philoLink = selectElement('.philo-link');

eraBtn.addEventListener('click', function(){
    eradropDown.classList.toggle('open-dropdown')
});

philoBtn.addEventListener('click', function(){
    philodropDown.classList.toggle('open-dropdown')
});