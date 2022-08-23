// questions
var quizQuestionNumber = 0;
var q2 = [];
q2.push({ask: "Commonly used data types DO NOT include:", answers: ["strings", "booleans", "alerts", "numbers"], correctAnswer: "alerts"});
q2.push({ask: "The condition in an if/else statement is enclosed within _____.", answers: ["quotes", "curly brackets", "parentheses", "square-brackets"], correctAnswer: "parentheses"});
q2.push({ask: "Arrays in JavaScript can be used to store _____.", answers: ["numbers and strings", "other arrays", "booleans", "all of the above"], correctAnswer: "all of the above"});
q2.push({ask: "String values must be enclosed within _____ when being assigned to variables.", answers: ["commas", "curly brackets", "quotes", "parentheses"], correctAnswer: "quotes"});
q2.push({ask: "A very useful tool used during development and debugging for printing content to the debugger is:", answers: ["JavaScript", "terminal/bash", "for loops", "console log"], correctAnswer: "console log"});


function quiz2() {
    var currentQuestion;
    currentQuestion = document.createElement('p');

    currentQuestion.innerHTML = q2[quizQuestionNumber].ask;
    

    sectionQuizDiv.appendChild(currentQuestion);
    // sectionQuizDiv.setAttribute('style', 'bold');
    // changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");
    sectionQuizDiv.children[0].style.fontWeight = 'bold';

    var currentButton;
    for (let index = 0; index < 4; index++) {
        // const element = array[index];
        currentButton = document.createElement('button');

        currentButton.innerHTML = (index+1).toString() + '. ' + quizQuestion1.answers[index];

        // if (quizQuestionNumber = 1) {
        //     currentButton.innerHTML = (index+1).toString() + '. ' + quizQuestion1.answers[index];
        // } else if (quizQuestionNumber = 2) {
        //     currentButton.innerHTML = (index+1).toString() + '. ' + quizQuestion2.answers[index];
        // } else if (quizQuestionNumber = 3) {
        //     currentButton.innerHTML = (index+1).toString() + '. ' + quizQuestion3.answers[index];
        // } else if (quizQuestionNumber = 4) {
        //     currentButton.innerHTML = (index+1).toString() + '. ' + quizQuestion4.answers[index];
        // } else if (quizQuestionNumber = 5) {
        //     currentButton.innerHTML = (index+1).toString() + '. ' + quizQuestion5.answers[index];    
        // } else {
        //     prompt('error');
        // }

        sectionQuizDiv.appendChild(currentButton);
        sectionQuizDiv.children[index+1].setAttribute('class', 'button');   // the question is at index 0

        quizQuestionNumber++;

    }


var quizQuestion1 = {
    ask: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2    // alerts
};

var quizQuestion2 = {
    ask: "The condition in an if/else statement is enclosed within _____.",
    answers: ["quotes", "curly brackets", "parentheses", "square-brackets"],
    correctAnswer: 2    // parentheses
};

var quizQuestion3 = {
    ask: "Arrays in JavaScript can be used to store _____.",
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer:  3   // all of the above
};

var quizQuestion4 = {
    ask:  "String values must be enclosed within _____ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer:  2   // quotes
};

var quizQuestion5 = {
    ask:  "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console log"],
    correctAnswer:  3   // console log
};

function quiz() {
    var currentQuestion;
    quizQuestionNumber++;
    currentQuestion = document.createElement('p');
    if (quizQuestionNumber = 1) {
        currentQuestion.innerHTML = quizQuestion1.ask;    
    } else if (quizQuestionNumber = 2) {
        currentQuestion.innerHTML = quizQuestion2.ask;    
    } else if (quizQuestionNumber = 3) {
        currentQuestion.innerHTML = quizQuestion3.ask;    
    } else if (quizQuestionNumber = 4) {
        currentQuestion.innerHTML = quizQuestion4.ask;    
    } else if (quizQuestionNumber = 5) {
        currentQuestion.innerHTML = quizQuestion5.ask;    
    } else {
        prompt('error');
    }

    sectionQuizDiv.appendChild(currentQuestion);
    // sectionQuizDiv.setAttribute('style', 'bold');
    // changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");
    sectionQuizDiv.children[0].style.fontWeight = 'bold';

    var currentButton;
    for (let index = 0; index < 4; index++) {
        // const element = array[index];
        currentButton = document.createElement('button');
        if (quizQuestionNumber = 1) {
            currentButton.innerHTML = (index+1).toString() + '. ' + quizQuestion1.answers[index];
        } else if (quizQuestionNumber = 2) {
            currentButton.innerHTML = (index+1).toString() + '. ' + quizQuestion2.answers[index];
        } else if (quizQuestionNumber = 3) {
            currentButton.innerHTML = (index+1).toString() + '. ' + quizQuestion3.answers[index];
        } else if (quizQuestionNumber = 4) {
            currentButton.innerHTML = (index+1).toString() + '. ' + quizQuestion4.answers[index];
        } else if (quizQuestionNumber = 5) {
            currentButton.innerHTML = (index+1).toString() + '. ' + quizQuestion5.answers[index];    
        } else {
            prompt('error');
        }

        sectionQuizDiv.appendChild(currentButton);
        sectionQuizDiv.children[index+1].setAttribute('class', 'button');   // the question is at index 0
    }

    // questionSet.textContent

    // h1El.textContent = "Welcome to my page";
    // kittenEl.textContent = "This is my kitten 🐱.";
    // nameEl.textContent = "His name is Jax.";
    // favoriteEl.textContent = "My favorite foods are:";
    
    // // sw
    // li1.textContent = "Oranges";
    // li2.textContent = "Apples";
    // li3.textContent = "Bananas";
    // li4.textContent = "Pears";
    
    // body.appendChild(h1El);
    // body.appendChild(infoEl);

}