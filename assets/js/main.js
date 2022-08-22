// logic
var startBtn = document.querySelector('#start-button');
var submitBtn = document.getElementById('submit-button');

// on START start timer
var timeRemaining = 15;

var timerEl = document.getElementById('countdown');

function countdown(timeLeft) {    
    var timeInterval = setInterval(function () {        
        if (timeLeft > 1) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = 'Times Up!';
            // stop the timer
            clearInterval(timeLeft);
        }
    }, 1000);
}



startBtn.addEventListener('click', function() {
    countdown(timeRemaining);
});
// countdown(timeRemaining);
