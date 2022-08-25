// stores quiz scores and retireves scores with highest rendered to the top

// localStorage.getItem('highscores');
// localStorage.getItem('user', JSON.parse(user));


// DOM object pointers
var quizListEl = document.getElementById('quiz-scores');


function saveScore(userInitials, userScore) {
    // scope local over global
    if (userInitials==='') {
        console.log('saveScore error');
        return;
    }

    // retrieve saved scores into array or create empty array if none saved yet
    var quizScores = JSON.parse(window.localStorage.getItem('quizScores')) || [];

    // inputs go into local object
    var personsScore = {
        initials: userInitials,
        score: userScore
    };

    // push object into array
    quizScores.push(personsScore);

    // localStorage.setItem(personsScore.initials, JSON.stringify(personsScore));
    
    // put updated data back into the local store
    window.localStorage.setItem('quizScores', JSON.stringify(quizScores));

    // jump to the scores page
    window.location.href = "quizscores.html"


    console.log('save score');
};




// var studentGrade = {
//     student: student.value,
//     grade: grade.value,
//     comment: comment.value.trim()
//   };
  
//   localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
//   renderMessage();
  
  
//   });
  
//   function renderMessage() {
//     var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//     if (lastGrade !== null) {
//       document.querySelector(".message").textContent = lastGrade.student + 
//       " received a/an " + lastGrade.grade
//     }
//   }


function renderScores(params) {
    console.log('highscores first');

    // retrieve saved scores into array or create empty array if none saved yet
    var quizScores = JSON.parse(window.localStorage.getItem('quizScores')) || [];

    // sort quizScores by the score attribute in reverse order
    quizScores.sort(function (a, b) {
        return b.score - a.score
    });

var myMainEl = document.getElementById('mymain');
var mytest = document.createElement('p');
mytest.textContent = 'hello';
myMainEl.appendChild(mytest);

    for (let index = 0; index < quizScores.length; index++) {

        var liEl = document.createElement('li');
        // liEl.textContent = quizScores[index].initials + '- ' + quizScores[index].score;
        liEl.textContent = 'geeee';

        quizListEl.appendChild(liEl);
        
    }

}

function clearScores(params) {
    console.log('clear scores');
    
}