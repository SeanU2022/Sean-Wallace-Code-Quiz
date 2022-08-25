// the quiz contains 5 knowledge tests
// each test asks a questions
// each test has four optional answers
// each test has one correct answer

var knowledgeTest = [];
knowledgeTest.push({ask: "Commonly used data types DO NOT include:", optionalAnswers: ["strings", "booleans", "alerts", "numbers"], correctAnswer: "alerts"});
knowledgeTest.push({ask: "The condition in an if/else statement is enclosed within _____.", optionalAnswers: ["quotes", "curly brackets", "parentheses", "square-brackets"], correctAnswer: "parentheses"});
knowledgeTest.push({ask: "Arrays in JavaScript can be used to store _____.", optionalAnswers: ["numbers and strings", "other arrays", "booleans", "all of the above"], correctAnswer: "all of the above"});
knowledgeTest.push({ask: "String values must be enclosed within _____ when being assigned to variables.", optionalAnswers: ["commas", "curly brackets", "quotes", "parentheses"], correctAnswer: "quotes"});
knowledgeTest.push({ask: "A very useful tool used during development and debugging for printing content to the debugger is:", optionalAnswers: ["JavaScript", "terminal/bash", "for loops", "console log"], correctAnswer: "console log"});
knowledgeTest.push({ask: "Good programming means:", optionalAnswers: ["it's fast", "the code is finished within 1 hour", "do not use for loops", "it meets requirements", "meets requirements and is maintainable", "I don't know"], correctAnswer: "meets requirements and is maintainable"});

function doQuiz(index) {
    // for each knowledge test: display the question with optional answers appearing below it

    // DOM object pointers
    var currentQuestion = document.getElementById('quiz-question');
    var quizFeedback = document.getElementById('quiz-feedback');

    // variables pointing to created DOM objects
    var optionalAnswersDiv;
    var optionalAnswerButton;

    // display current knowledge test question
    currentQuestion.innerHTML = knowledgeTest[index].ask;
    currentQuestion.style.fontWeight = 'bold';
    currentQuestion.style.textAlign = "left";
    // A visibility hidden/visible takes up space
    // A currentQuestion.style.visibility = "hidden";
    // A display hides and removes element
    // A currentQuestion.style.display = "none";

    // generate the optional answers for the knowledge test question
    optionalAnswersDiv = document.createElement('div');
    sectionQuizDiv.appendChild(optionalAnswersDiv);

    for (let indexOA = 0; indexOA < knowledgeTest[index].optionalAnswers.length; indexOA++) {
        optionalAnswerButton = document.createElement('button');
        optionalAnswerButton.innerHTML = (indexOA+1).toString() + '. ' + knowledgeTest[index].optionalAnswers[indexOA];
        optionalAnswersDiv.appendChild(optionalAnswerButton);

        optionalAnswerButton.setAttribute('class', 'button');      // THIS WORKS
        // currentButton.style.class = 'button';            // THIS DOES NOT WORK
        // optionalAnswerButton.style = 'button';            // THIS DOES NOT WORK
        // optionalAnswerButton.style.class = 'button';            // THIS DOES NOT WORK
        optionalAnswerButton.setAttribute('id', knowledgeTest[index].optionalAnswers[indexOA]);       // this button will get destroyed after click since it's id is not universally unique

        // any answer button clicked updates score and starts next Knowledge Test
        optionalAnswerButton.addEventListener('click', function () {
            if (this.id === knowledgeTest[index].correctAnswer) {
                userScore++;
                quizFeedback.textContent = "You were Correct! score is: " + userScore
            } else {                    
                quizFeedback.textContent =  "You were Wrong! score still is: " + userScore
            }
            // clean up the page: remove current question
            optionalAnswersDiv.remove();

            // point to next global question
            currentKnowledgeTest++;
            if (currentKnowledgeTest < knowledgeTest.length) {
                doQuiz(currentKnowledgeTest);                          // recursive function call
            } else {
                endQuiz();  // DOES NOT WORK
            }
            return                                          // always return on click
        })
    }
}