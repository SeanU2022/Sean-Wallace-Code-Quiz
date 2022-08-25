// global variables for the overall state of things
var userScore = 0;
var currentKnowledgeTest = 0;

var secondsRemaining = knowledgeTest.length * 20;    // each test has 2 seconds to do!

secondsRemaining = 10;

var countdownClock;

// var currentFeedback = '';

// DOM object pointers
var timerEl = document.getElementById('countdown');
var tagH1 = document.getElementById('h1');
var tagQuizIntroduction = document.getElementById('quiz-introduction');
var startBtn = document.querySelector('#start-button');

var sectionQuizDiv = document.getElementById('quiz-div');   // used in questions.js>quiz()

    // DOM object pointers
    var currentQuestion = document.getElementById('quiz-question');
    var quizFeedback = document.getElementById('quiz-feedback');

    // variables pointing to created DOM objects
    var optionalAnswersDiv;
    var optionalAnswerButton;

    // after quiz submit form
    var sectionAllDone = document.getElementById('all-done');
    var allDoneH2 = document.getElementById('after-quiz-h2');  
    var allDoneP = document.getElementById('after-quiz-p');
    var allDoneL = document.getElementById('after-quiz-label');
    var allDoneInitials = document.getElementById('initials');
    var allDoneSubmitBtn = document.getElementById('submit-button');


// unlike header elements in flex this main display is block so styles can be applied

// sectionAllDone.children[0].style.color = 'red';
// sectionAllDone.children[1].style.color = 'green';
// sectionAllDone.children[2].style.color = 'blue';
// ERROR WHEN I TAKE OUT ALL-DONE SECTION; sectionAllDone.children[3].style.color = 'yellow';

// var submitBtn = document.getElementById('submit-button');

function countdown() {
    countdownClock = setInterval(function () {
        console.log(secondsRemaining);
        if (secondsRemaining >= 1) {
            timerEl.textContent = secondsRemaining;
        } else if (secondsRemaining === 0 || secondsRemaining < 0) {
            timerEl.textContent = "Time's Up!";
            // stop the clock
            endQuiz();
            return;
        } else {
            endQuiz();
            console.log('error with countdown() clock');
            return;
        };
        secondsRemaining--;
    }, 1000);
}

function startQuiz() {
    tagH1.remove();
    tagQuizIntroduction.remove();
    startBtn.remove();  // the event stays fired even though its source is taken away; this also stops user clicking more than once
    // start the clock
    countdown();
}

function endQuiz() {
    // stop the clock
    clearInterval(countdownClock);
    
    // clean up the page: remove current question, optional answers, feedback
    currentQuestion.innerHTML = '';
    optionalAnswersDiv.remove();
    quizFeedback.textContent = '';
    
    // show final form section with submit button
    allDoneP.textContent = 'Your final score is: ' + userScore;

    allDoneH2.setAttribute('style', 'visibility: visible;');
    allDoneP.setAttribute('style', 'visibility: visible;');
    allDoneL.setAttribute('style', 'visibility: visible;'); 
    allDoneInitials.setAttribute('style', 'visibility: visible;'); 
    allDoneSubmitBtn.setAttribute('style', 'visibility: visible;');


    // localStorage.setItem("email", email);
    // localStorage.setItem("password", password);


    console.log('finished');
}

// startBtn.addEventListener('click', countdown);

// startBtn.addEventListener('click', function() {
//     tagH1.remove();
//     tagQuizIntroduction.remove();
//     startBtn.remove();  // the event stays fired even though its source is taken away; this also stops user clicking more than once
//     countdown();
//     doQuiz(currentKnowledgeTest);
// });

// v2
startBtn.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    startQuiz();
    doQuiz(currentKnowledgeTest);
});

allDoneSubmitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var userInitials = document.querySelector('#initials').value.trim();
    if (userInitials === '' || userInitials.length > 5) {
        alert('Please enter your initials [up to 5 letters]');
    } else {
        // alert('your name is:' + userInitials );
        console.log(userInitials);
        console.log(userScore);

        saveScore(userInitials, userScore);
        // localStorage.setItem("score", userScore); 

        // save scores to local

    }
    });

// signUpButton.addEventListener("click", function(event) {
//     event.preventDefault();
  
//     var email = document.querySelector("#email").value;
//     var password = document.querySelector("#password").value;
  
//     if (email === "") {
//       displayMessage("error", "Email cannot be blank");
//     } else if (password === "") {
//       displayMessage("error", "Password cannot be blank");
//     } else {
//       displayMessage("success", "Registered successfully");
  
//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//     }
//   });
