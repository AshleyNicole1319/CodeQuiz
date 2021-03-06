// Set-up Variables
var displayTime = document.getElementById('timer');
var questionContainerEl = document.getElementById('question-container');
var intro = document.getElementById('intro');
var questionEl = document.getElementById('questions');
var answerChoicesEl = document.getElementById('answer-choices');
var startButton = document.getElementById('start');
var outro = document.getElementById('outro');
var highScore = document.getElementById('high-score');
var initialsEl = document.getElementById('player-initials');
var displayAnswer = document.getElementById('answer');
var submitScoreEl = document.getElementById('submit-btn');

var countDown;
var time = 60;
var score = 0;
var changeQuestions, questionIndex;

//Start Quiz
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.classList.add('hide');
    intro.classList.add('hide');
    displayTime.classList.remove('hide');
    questionContainerEl.classList.remove('hide');
    questionIndex = 0;
    changeQuestions = questions.sort(() => Math.random());
    newQuestion();
    timer();
};

//Start Timer
function timer() {
    countDown = setInterval(function() {
        if (time > 1) {    
            displayTime.innerHTML = 'Time Remaining: ' + time + ' seconds';
            time--;
        } else if (time === 1) {
            displayTime.innerHTML = 'Time Remaining: ' + time + ' seconds';
            time--;
        } else {
            endQuiz(); //Quiz ends if time Runs out
        }
    },1000);
};


//Display and Change Questions
function newQuestion() {
    resetState();
    questionEl.classList.remove('hide');
    displayQuestion(changeQuestions[questionIndex]);
};

function resetState() {
    while (answerChoicesEl.firstChild) {
        answerChoicesEl.removeChild(answerChoicesEl.firstChild);
    }
};

function displayQuestion(question) {
    questionEl.innerText = question.question;
    var buttonClicked = false;
    for (let i = 0; i < question.answer.length; i++) {
        let answerButton = document.createElement('button');
        answerButton.innerText = question.answer[i].text;
        answerButton.classList.add('btn');
        answerButton.addEventListener('click', function () {
            if (buttonClicked) {
                return;
            }
            buttonClicked = true;
            var answer = question.answer[i].correct;
            if (answer) {
                answerCorrect();
                score++;
            } else {
                answerWrong();
                time -= 5;
            }

            // 'correct' or 'wrong' disappears after 2 time
            setTimeout(function() {
                displayAnswer.classList.add('hide');
                if (changeQuestions.length > questionIndex + 1) {
                    questionIndex++;
                    newQuestion();
                } else {
                    endQuiz(); 
                }
            }, 1500);
        });
        answerChoicesEl.appendChild(answerButton);
    }
};

//Display Answers Right or Wrong
function answerWrong() {
    displayAnswer.classList.remove('hide')
    displayAnswer.textContent = "Incorrect!"
}

function answerCorrect() {
    displayAnswer.classList.remove('hide')
    displayAnswer.textContent = "Correct!"
}


//End Quiz
function endQuiz() {
    clearInterval(countDown);
    outro.classList.remove('hide');
    questionContainerEl.classList.add('hide');
    displayTime.textContent = 'Score: ' + time;
    highScore.innerHTML = time;
    submitScoreEl.addEventListener('click', saveHighScore);
}

//HighScores
function saveHighScore(event) {
    event.preventDefault();
    // set valid input for submitting initials
    var initials = initialsEl.value;
    if (initials.length <= 1) {
        alert("Please enter your initials.");
        return;
    }

    var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    var newScore = {
        name: initials,
        score: time
    }
    highScores.push(newScore);
    highScores.sort( (a,b) =>  b.newScore - a.newScore);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.href = './highscores.html';
};

//Questions
var questions = [
    {
        question: 'box-sizing is a property that changes the calculation of which values of the element?',
        answer: [
            { text: "A. width", correct: false},
            { text: "B. height", correct: false},
            { text: "C. margin", correct: false},
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
            { text: "In your style sheet", correct: false},
            { text: "At the end of your HTML body", correct: true}, 
            { text: "In the head of your HTML", correct: false},
            { text: "You do not need to link it", correct: false},
        ]
    }
];