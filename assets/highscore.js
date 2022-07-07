// list variables for highscores.html
var clearBtnEl = document.getElementById('clear-btn');
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

function loadHighScore() {
    // sort scores by highest to lowest
    highScores.sort(function(a,b) {
    return b.score - a.score;
    })

    // create li tag for each score entry
    highScores.forEach(function(highScores) {
        var liTag = document.createElement('li');
        liTag.textContent = highScores.name + ' - ' + highScores.score;

        var showScores = document.getElementById('highscores-list');
        showScores.appendChild(liTag);
    })
};

function clearHighScore() {
    // clear scores in localStorage
    localStorage.clear(highScores);
};

loadHighScore();

clearBtnEl.addEventListener('click', function() {
    clearHighScore();
    window.location.reload();
});