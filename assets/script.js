var btnAEl = document.querySelector("#btna");
var btnBEl = document.querySelector("#btnb");
var btnCEl = document.querySelector("#btnc");
var btnDEl = document.querySelector("#btnd");
var responseEl = document.querySelector("#response")

var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var questionsEl = document.querySelector('#questions');
var startScreen = document.querySelector('.quiz-intro');
var questionScreen = document.querySelector('.question-screen');


var timerEl = document.querySelector("#timer");
var startbtnEl = document.querySelector("#startbtn")
var restartbtnEl = document.querySelector("#restartbtn")

var time = 60;
var score = time;
var remainingtime = "";

document.getElementById("startbtn").addEventListener("click", function(){
    startquiz();

});


var questions = [
    {
        question: 'box-sizing is a property that changes the calculation of which values of the element?',
        choices: ["width", "height", "margin", "width and height"],
        correctanswer: 'width and height'
    },
    {
        question: 'What is an example of a pseudo-element?',
        choices: ["::before", "::after", "::first-letter", "All of the above"],
        correctanswer: 'All of the above'
    },
    {
        question: 'What property changes stacking order and how elements overlap each other?',
        choices: ["z-index", "flex", "c-index", "stack"],
        correctanswer: 'z-index'
    },
    {
        question: 'Where is it best to put the link to a JavaScript page?',
        choices: ["In your style sheet", "At the end of your HTML body", "In the head of your HTML", "You do not need to link it"],
        correctanswer: 'At the end of your HTML body'
    }
];

