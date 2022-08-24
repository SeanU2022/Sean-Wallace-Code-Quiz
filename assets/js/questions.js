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

function quiz() {
    // for each knowledge test: display the question with optional answers appearing below it

    var currentQuestion;
    var optionalAnswersDiv;
    var optionalAnswerButton;
    var answerFeedback;

    // populate index<main><div id="quiz-div"
    // sectionQuizDiv defined in main.js
// for (let indexKT = 0; indexKT < knowledgeTest.length; indexKT++) {
var indexKT = 0
        
        currentQuestion = document.createElement('p');
        currentQuestion.innerHTML = knowledgeTest[indexKT].ask;
        sectionQuizDiv.appendChild(currentQuestion);
        currentQuestion.style.fontWeight = 'bold';
        // BOLD ALT METHOD sectionQuizDiv.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");
        currentQuestion.style.textAlign = "left";
        // visibility hidden/visible takes up space
        // currentQuestion.style.visibility = "hidden";
        // display hides and removes element
        // currentQuestion.style.display = "none";


        // text-align: center;

        
        optionalAnswersDiv = document.createElement('div');
        sectionQuizDiv.appendChild(optionalAnswersDiv);

        for (let indexOA = 0; indexOA < knowledgeTest[indexKT].optionalAnswers.length; indexOA++) {
            optionalAnswerButton = document.createElement('button');
            optionalAnswerButton.innerHTML = (indexOA+1).toString() + '. ' + knowledgeTest[indexKT].optionalAnswers[indexOA];
            optionalAnswersDiv.appendChild(optionalAnswerButton);

            optionalAnswerButton.setAttribute('class', 'button');      // THIS WORKS
            // currentButton.style.class = 'button';            // THIS DOES NOT WORK
            // optionalAnswerButton.style = 'button';            // THIS DOES NOT WORK
            // optionalAnswerButton.style.class = 'button';            // THIS DOES NOT WORK
            optionalAnswerButton.setAttribute('id', knowledgeTest[indexKT].optionalAnswers[indexOA]);       // this button will get destroyed after click since it's id is not universally unique

            optionalAnswerButton.addEventListener('click', function () {
                // if (this.textContent === "3. alerts") {
                // if (this.id === "alerts") {
                if (this.id === knowledgeTest[indexKT].correctAnswer) {
                    console.log(this.textContent);
                    alert(this.textContent + '=>it worked');
                }
            })
        }

        answerFeedback = document.createElement('p');
        answerFeedback.setAttribute('class', 'answer-feedback');
        answerFeedback.textContent = "Correct!"
        sectionQuizDiv.appendChild(answerFeedback);
// }
}