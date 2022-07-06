var btnAEl = document.querySelector("#btna");
var btnBEl = document.querySelector("#btnb");
var btnCEl = document.querySelector("#btnc");
var btnDEl = document.querySelector("#btnd");
var responseEl = document.querySelector("#response")

var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var questionsEl = document.querySelector('#question');
var startScreen = document.querySelector('.intro');
var questionScreen = document.querySelector('#question-contianer');


var timerEl = document.querySelector("#timer");
var startbtnEl = document.querySelector("#start")
var restartbtnEl = document.querySelector("#restartbtn")

var time = 60;
var score = time;
var remainingtime = "";

document.getElementById("start").addEventListener("click", function(){
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

var questionIndex = 0;
function startquiz() {
    startScreen.classList.add("hide");
    questionScreen.classList.remove("hide");
    remainingtime = time;
    valId = setInterval(startTime, 1000);
    setQandA();
};

function setQandA() {
    var question = questions[questionIndex];
    questionsEl.textContent = question.question;
    btnAEl.textContent = questions[questionIndex].choices[0];
    btnBEl.textContent = questions[questionIndex].choices[1];
    btnCEl.textContent = questions[questionIndex].choices[2];
    btnDEl.textContent = questions[questionIndex].choices[3];
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



btnAEl.addEventListener("click", function () {
    checkanswer(btnAEl.textContent);
});
btnBEl.addEventListener("click", function () {
    checkanswer(btnBEl.textContent);
});
btnCEl.addEventListener("click", function () {
    checkanswer(btnCEl.textContent);
});
btnDEl.addEventListener("click", function () {
    checkanswer(btnDEl.textContent);
});