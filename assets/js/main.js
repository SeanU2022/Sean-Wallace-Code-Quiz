// global variables for the overall state of things
var userScore = 0;
var finalScore = 0;
var currentKnowledgeTest = 0;

var secondsRemaining = knowledgeTest.length * 10;    // each test has 10 seconds to do!
var secondsQuizPenalty = 10;

var countdownClock;

// DOM object pointers
var timerEl = document.getElementById('countdown');
var tagH1 = document.getElementById('h1');
var tagQuizIntroduction = document.getElementById('quiz-introduction');
var startBtn = document.querySelector('#start-button');

// DOM objects in quiz    // used in doQuiz()
var sectionQuizDiv = document.getElementById('quiz-div');
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

function countdown() {
    countdownClock = setInterval(function () {
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

function doQuiz(index) {
    // for each knowledge test: display the question with optional answers appearing below it

    // display current knowledge test question
    currentQuestion.innerHTML = knowledgeTest[index].ask;
    currentQuestion.style.fontWeight = 'bold';
    currentQuestion.style.textAlign = "left";

    // generate the optional answers for the knowledge test question, add to sectionQuizDiv pointing to index.html>#quiz-div
    optionalAnswersDiv = document.createElement('div');
    sectionQuizDiv.appendChild(optionalAnswersDiv);

    for (let indexOA = 0; indexOA < knowledgeTest[index].optionalAnswers.length; indexOA++) {
        
        // add a button
        optionalAnswerButton = document.createElement('button');
        optionalAnswerButton.innerHTML = (indexOA+1).toString() + '. ' + knowledgeTest[index].optionalAnswers[indexOA];
        optionalAnswersDiv.appendChild(optionalAnswerButton);
        optionalAnswerButton.setAttribute('class', 'button');
        optionalAnswerButton.setAttribute('id', knowledgeTest[index].optionalAnswers[indexOA]);       // this button will get destroyed after click since it's id is not universally unique

        // give the button an event to listen to
        // any answer button clicked updates score and starts next Knowledge Test
        optionalAnswerButton.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (this.id === knowledgeTest[index].correctAnswer) {
                userScore++;
                quizFeedback.textContent = "Correct! tally is: " + userScore
            } else {
                secondsRemaining+=-secondsQuizPenalty; 
                quizFeedback.textContent =  "Wrong! tally is: " + userScore
            }
            // clean up the page: remove current question and optional answers
            currentQuestion.innerHTML = '';
            optionalAnswersDiv.remove();

            // point to next global question
            currentKnowledgeTest++;
            if (currentKnowledgeTest < knowledgeTest.length) {
                doQuiz(currentKnowledgeTest);                          // recursive function call (safe on 3 counts: inside for loop, clock stops quiz no matter what, once clicked the button gets destroyed)
            } else {
                endQuiz();
            }
            return                                          // always return on click
        })
    }
}

function endQuiz() {
    // stop the clock
    clearInterval(countdownClock);
    finalScore = secondsRemaining+(userScore*10);
    // add 1 to second to final score shown to match players impression of score with time remaining
    finalScore = finalScore + 1;
    
    // clean up the page: remove current question, optional answers, feedback
    currentQuestion.innerHTML = '';
    optionalAnswersDiv.remove();
    quizFeedback.textContent = '';
    
    // show final form section with submit button
    allDoneP.textContent = 'Your final score is: ' + finalScore;

    allDoneH2.setAttribute('style', 'visibility: visible;');
    allDoneP.setAttribute('style', 'visibility: visible;');
    allDoneL.setAttribute('style', 'visibility: visible;'); 
    allDoneInitials.setAttribute('style', 'visibility: visible;'); 
    allDoneSubmitBtn.setAttribute('style', 'visibility: visible;');
}

function saveScore(userInitials, userScore) {
    // scope local over global
    if (userInitials==='') {
        console.log('saveScore error');
        return;
    }
    
    // retrieve saved scores into array or create empty array if none saved yet
    var quizScores = JSON.parse(window.localStorage.getItem('quizScores')) || [];

    // params go into local object
    var personsScore = {
        initials: userInitials,
        score: userScore
    };

    // if user has a previous score already stored save the highest of previous or current score
    var doPush = true;
    var index = 0;
    while (index < quizScores.length) {
        // find the previous record and update it
        if (quizScores[index].initials === personsScore.initials) {
            
            // only record the highest score for this user
            if (quizScores[index].score < personsScore.score) {
                quizScores[index].score = personsScore.score;
            } else {
                // keep the old score if it is >= current score
            }            
            doPush = false;                 // do not create new record
            index = quizScores.length;      // finish the while loop early
        }
        else {
            // keep searching until all records have been traversed
            index++;
        }
    }

    // if previous loop did not find a previous score then add a new record
    if (doPush) {quizScores.push(personsScore)};

    // put updated data back into the local store
    // localStorage.quizScores.initials = personsScore.initials // from userInitials
    // localStorage.quizScores.score = personsScore.score // from userScore
    window.localStorage.setItem('quizScores', JSON.stringify(quizScores));

    // jump to the scores page
    window.location.href = "quizscores.html"
};

// start
startBtn.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    startQuiz();
    doQuiz(currentKnowledgeTest);
});

// submit after quiz
allDoneSubmitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var userInitials = document.querySelector('#initials').value.trim();
    if (userInitials === '' || userInitials.length > 5) {
        alert('Please enter your initials [up to 5 letters]');
    } else {
        saveScore(userInitials, finalScore);
    }
});
