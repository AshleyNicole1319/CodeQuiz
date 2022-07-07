var displayTime = document.getElementById('timer');
var questionContainerEl = document.getElementById('question-container');
var intro = document.getElementById('intro');
const questionEl = document.getElementById('questions');


//old JS
var responseEl = document.querySelector("#response")

var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var questionsEl = document.querySelector('#question');
var startScreen = document.querySelector('.intro');
var questionScreen = document.querySelector('.question-container');
var timerEl = document.querySelector("#timer");
var startbtnEl = document.querySelector("#start")
var restartbtnEl = document.querySelector("#restartbtn")


var time = 60;
var score = time;
var remainingtime = "";

document.getElementById("start").addEventListener("click", function(){
    startquiz();
});


function startquiz() {
    startScreen.classList.add("hide");
    questionScreen.classList.remove("hide");
    remainingtime = time;
    valId = setInterval(startTime, 1000);
    setQandA();
};


function checkanswer(selectedAnswer) {
    var correctanswer = questions[questionIndex].correctanswer;
    if(selectedAnswer === correctanswer) {
        alert("Correct");
    }
    else {
        alert("Incorrect");
        time-=5
        document.getElementById("timer").innerHTML=time;
    }
    if(questionIndex === questions.length -1) {
        alert("Your Score Is" + time);
        endQuiz();
    }
    else {
        questionIndex++;
        setQandA();
    }
};

var startTime = function() {
    if(time>0) {
        time-=1;
        document.getElementById ("timer").innerHTML=time;
    }
    else {
        clearInterval(valId);
        alert("Your time is up")
    }
};


var questions = [
    {
        question: 'box-sizing is a property that changes the calculation of which values of the element?',
        answer: [
            { text: "A. width", correct: false}
            { text: "B. height", correct: false}
            { text: "C. margin", correct: false}
            { text: "D. width and height", correct: true}
        ],
    },
    {
        question: 'What is an example of a pseudo-element?',
        answer: [
        { text: "::before", correct: false},
        { text: "::after", correct: false},
        { text: "::first-letter", correct: false},
        { text: "All of the above", correct: true}
    ],
    },
    {
        question: 'What property changes stacking order and how elements overlap each other?',
        answer: [
            { text: "z-index", correct: true},
            { text: "flex", correct: false},
            { text: "c-index", correct: false},
            { text: "stack", correct: false}
        ],
    },
    {
        question: 'Where is it best to put the link to a JavaScript page?',
        answer: [
            {"In your style sheet", correct: false},
            {"At the end of your HTML body", correct: true}, 
            {"In the head of your HTML", correct: false},
            {"You do not need to link it", correct: flase},
        ]
    }
];