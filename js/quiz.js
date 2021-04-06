//Select element function
const selectElement = function (element){
    return document.querySelector(element);
}

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open')
});

let philoToggler = selectElement('.philosophicalness-btn');
let modalContainer = selectElement('.philo-quiz-modal');
let closeModal = selectElement('.close-modal');
let textModal = document.querySelectorAll('.text-modal');

philoToggler.addEventListener('click', function(){
    modalContainer.classList.toggle('open-modal')
    for(i=0; i<textModal.length; i++){
        textModal[i].classList.toggle('text-description')
    }
})

closeModal.addEventListener('click', function(){
    modalContainer.classList.toggle('open-modal')
    for(i=0; i<textModal.length; i++){
        textModal[i].classList.toggle('text-description')
    }
})

let manageBtn = selectElement('.manage-btn');
let manageContainer = document.querySelectorAll('.manage-quiz');

manageBtn.addEventListener('click', function (){
    for(i=0; i < manageContainer.length; i++){
        manageContainer[i].classList.toggle('open-manage');
    }
})

let textChange = document.querySelectorAll('.philo-modal a');
let modalHover = document.querySelectorAll('.philo-btn-difficulty');

modalHover[0].addEventListener('mouseover', function (){
    textChange[0].classList.add('text-change');
})
modalHover[0].addEventListener('mouseout', function (){
    textChange[0].classList.remove('text-change');
})
modalHover[1].addEventListener('mouseover', function (){
    textChange[1].classList.add('text-change');
})
modalHover[1].addEventListener('mouseout', function (){
    textChange[1].classList.remove('text-change');
})
modalHover[2].addEventListener('mouseover', function (){
    textChange[2].classList.add('text-change');
})
modalHover[2].addEventListener('mouseout', function (){
    textChange[2].classList.remove('text-change');
})
