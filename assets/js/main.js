
// main elements get removed once Start Quiz is clicked
var tagH1 = document.getElementById('h1');
var tagQuizIntroduction = document.getElementById('quiz-introduction');
var startBtn = document.querySelector('#start-button');

var sectionQuizDiv = document.getElementById('quiz-div');   // used in questions.js>quiz()

// unlike header elements in flex this main display is block so styles can be applied
var sectionAllDone = document.getElementById('all-done');
// sectionAllDone.children[0].style.color = 'red';
// sectionAllDone.children[1].style.color = 'green';
// sectionAllDone.children[2].style.color = 'blue';
// ERROR WHEN I TAKE OUT ALL-DONE SECTION; sectionAllDone.children[3].style.color = 'yellow';

var submitBtn = document.getElementById('submit-button');

var sectionAllDoneElementCount = 5;     // h2, p, label, input, button
for (let index = 0; index < sectionAllDoneElementCount; index++) {
    // sectionAllDone.children[index].style.visibility = 'hidden';
}



// on START start timer
var secondsCountdown = 5;

var timerEl = document.getElementById('countdown');

function countdown() {
// function countdown(event) {
    var secondsRemaining = secondsCountdown;
    // event.preventDefault();
    // event.stopPropagation();
    // console.log(event);

    var timeInterval = setInterval(function () {
        console.log(secondsRemaining);
        if (secondsRemaining >= 1) {
            timerEl.textContent = 'Time: ' + secondsRemaining;
        } else if (secondsRemaining === 0) {
            console.log(secondsRemaining);
            timerEl.textContent = 'Times Up!';
            // stop the timer
            clearInterval(timeInterval);
            return;
        } else {
            clearInterval(timeInterval);
            console.log('error with countdown() timer');
        };
        secondsRemaining--;
    }, 1000);
}

// startBtn.addEventListener('click', countdown);
startBtn.addEventListener('click', function() {
    tagH1.remove();
    tagQuizIntroduction.remove();
    startBtn.remove();  // the event stays fired even though its source is taken away; this also stops user clicking more than once
    countdown();
    quiz();
});
