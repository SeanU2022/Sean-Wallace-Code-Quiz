// import './elements';

// var tagH1 = document.createElement("h1");
// tagH1.textContent = "Coding Quiz Challenge";
// document.body.appendChild(tagH1);



// logic
var startBtn = document.querySelector('#start-button');
var submitBtn = document.getElementById('submit-button');
var tagH1 = document.getElementById('h1');
var tagQuizIntroduction = document.getElementById('quiz-introduction');


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
});
