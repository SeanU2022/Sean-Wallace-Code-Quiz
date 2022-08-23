// var element = document.getElementById('div-02');
// element.remove();

var tagH1 = document.createElement("h1");
var tagP = document.createElement("p");
var tagBtn = document.createElement("button");

// Adds text content to created tags
tagH1.textContent = "Coding Quiz Challenge";
tagP.textContent = "<strong>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalise your score/time by 10 seconds.</strong>";
tagBtn.textContent = "Start Quiz";

// Appends tag as child of document body
document.body.appendChild(tagH1);
document.body.appendChild(tagP);
document.body.appendChild(tagBtn);

console.log('elements');

// Create ordered list element
// var listEl = document.createElement("ol");
// Create ordered list items
// var li1 = document.createElement("li");
