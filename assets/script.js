// Set-up Variables
var displayTime = document.getElementById('timer');
var questionContainerEl = document.getElementById('question-container');
var intro = document.getElementById('intro');
var questionEl = document.getElementById('questions');
var answerChoicesEl = document.getElementById('answer-choices');
var startButton = document.getElementById('start');
var outro = document.getElementbyId('outro');
var highScore = document.getElementById('high-score');
var initials = document.getElementbyId('player-initials');
var displayAnswer = document.getElementById('answer');
var submitScoreEl = document.getElementById('submit-btn');

var countDown;
var time = 60;
var score = time;
var questionIndex;

//Start Quiz
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.classList.add('hide');
    intro.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    questionIndex = 0;
    changeQuestions = questions.sort(() => Math.random());
    setQuestion();
    timer();
};

//Start Timer
function timer() {
    countDown = setInterval(function() {
        if (time > 1) {    
            displayTime.innerHTML = 'Time Remaining: ' + time + ' seconds';
            time--;
        } else if (time === 1) {
            displayTime.innerHTML = 'Time Remaining: ' + time + ' second';
            time--;
        } else {
            endQuiz(); //Quiz end if time Runs out
        }
    });
};


//Display and Change Questions
function newQuestion() {
    resetState();
    questionEl.classList.remove('hide');
    displayQuestion(questionIndex);
};

function resetState() {
    while (answerChoicesEl.firstChild) {
        answerChoicesEl.removeChild(answerChoicesEl.firstChild);
    }
};

function displayQuestion(question) {
    questionEl.innerText = question.question;
    for (var i = 0; i < question.answer.length; i++) {
        var answerButton = document.createElement('button');
        answerButton.innerText = question.answer[i].text;
        answerButton.classList.add('btn');
        answerButton.addEventListener('click', function () {
            
            var answer = question.answer[i].correct;
            if (answer) {
                answerCorrect();
            } else {
                answerWrong();
                time -= 5;
            }

            if (changeQuestions.length > questionIndex + 1) {
                questionIndex++;
                setQuestion();
            } else {
                endQuiz(); 
            }

            // 'correct' or 'wrong' disappears after 2 time
            setTimeout(function() {
                displayAnswer.classList.add('hide');
            });
        });
        answerChoicesEl.appendChild(answerButton);
    }
};

//Display Answers Right or Wrong
function answerWrong {
    displayAnswer.classList.remove('hide')
    displayAnswer.textArea = "Incorrect!"
}

function answerCorrect{
    displayAnswer.classList.remove('hide')
    displayAnswer.textArea = "Correct!"
}


//End Quiz
function endQuiz() {
    clearInterval(countDown);
    outro.classList.remove('hide');
    questionContainerEl.ClassList.add('hide');
    displayTime.textContent = 'Score: ' + time;
    highScore.innerHTML = time;
    submitScoreEl.addEventListener('click', saveHighScore);
}

//* function checkanswer(selectedAnswer) {
   // var correctanswer = questions[questionIndex].correctanswer;
    //if(selectedAnswer === correctanswer) {
    //    alert("Correct");
    //}
    //else {
    //    alert("Incorrect");
    //   time-=5
     //   document.getElementById("timer").innerHTML=time;
    //}
    //if(questionIndex === questions.length -1) {
      //  alert("Your Score Is" + time);
        //endQuiz();
    //}
    //else {
      //  questionIndex++;
        //setQandA();
   // }
//}; 


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