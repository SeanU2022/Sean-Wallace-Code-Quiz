// the quiz contains X knowledge tests
// each test asks a question
// each test has Y optional answers
// each test has one correct answer
// NOTE: correctAnswer MUST MATCH ONE of the optionalAnswers

var knowledgeTest = [
  {
    ask: "Commonly used data types DO NOT include:",
    optionalAnswers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    ask: "The condition in an if/else statement is enclosed within _____.",
    optionalAnswers: [
      "quotes",
      "curly brackets",
      "parentheses",
      "square-brackets",
    ],
    correctAnswer: "parentheses",
  },
  {
    ask: "Arrays in JavaScript can be used to store _____.",
    optionalAnswers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
  {
    ask: "String values must be enclosed within _____ when being assigned to variables.",
    optionalAnswers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes",
  },
  {
    ask: "A very useful tool used during development and debugging for printing content to the debugger is:",
    optionalAnswers: [
      "JavaScript",
      "terminal/bash",
      "for loops",
      "console log",
    ],
    correctAnswer: "console log",
  },
  {
    ask: "Good programming means:",
    optionalAnswers: [
      "it's fast",
      "the code is finished within 1 hour",
      "do not use for loops",
      "it meets requirements",
      "meets requirements and is maintainable",
      "I don't know",
    ],
    correctAnswer: "meets requirements and is maintainable",
  },
];
