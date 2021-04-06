//Select element function
const selectElement = function (element){
    return document.querySelector(element);
}

let multipleChoiceBtn = selectElement('.btn-multiple-choice');
let quizContainer = selectElement('.create-quiz-container');

x = 0;
function createMultipleChoice(){
    var multipleChoice = document.createElement('div');
    quizContainer.appendChild(multipleChoice);
    multipleChoice = document.querySelectorAll('.create-quiz-container div')[x];
    multipleChoice.setAttribute('class', 'multiple-choice inside-quiz-container');
    multipleChoice = document.querySelectorAll('.multiple-choice')[x];
    var multipleChoiceQuestion = document.createElement('p');
    multipleChoice.appendChild(multipleChoiceQuestion);
    multipleChoiceQuestion = document.querySelectorAll('.multiple-choice p')[x];
    var QuestionSpan = document.createElement('span');
    multipleChoiceQuestion.appendChild(QuestionSpan);
    QuestionSpan = document.querySelectorAll('.multiple-choice p span')[x];
    QuestionSpan.setAttribute('class','textarea');
    QuestionSpan.setAttribute('role','textbox');
    QuestionSpan.contentEditable = "true";
    QuestionSpan = document.querySelector('textbox');
    x++;   
}

multipleChoiceBtn.addEventListener('click', function() {
    createMultipleChoice();
})