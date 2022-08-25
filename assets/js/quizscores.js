// stores quiz scores and retireves scores with highest rendered to the top

// DOM object pointers
var clearScoresBtn = window.document.getElementById('clear-highscores-button');

function renderScores() {
    console.log('highscores first');

    // retrieve saved scores into array or create empty array if none saved yet
    var quizScores = JSON.parse(window.localStorage.getItem('quizScores')) || [];

    // sort quizScores by the score attribute in reverse order
    quizScores.sort(function (a, b) {
        return b.score - a.score
    });

    // build ordered list of scores and show
    var olEl = document.getElementById("quiz-scores");
    for (let index = 0; index < quizScores.length; index++) {
        var liEl = document.createElement('li');
        liEl.textContent = quizScores[index].initials + '- ' + quizScores[index].score;
        olEl.appendChild(liEl);
    }

}

function clearScores() {
    window.localStorage.removeItem('quizScores');
    window.location.reload()
    console.log('clear scores');
    
}

window.onload = init;

function init(){
    // the code to be called when the dom has loaded
    renderScores();
}

// empty the local store database
clearScoresBtn.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    if (confirm("This will erase all scores! Are you sure?")) {
        clearScores();
    }
});


