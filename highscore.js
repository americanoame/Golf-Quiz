var highScore = document.querySelector('#highScore');
var btnScore = document.querySelector('#btn-score');
var saveName = document.querySelector('#name');
var saveBtn = document.querySelector('#save-btn');

function getWins() {
    var storedWins = localStorage.getItem('score');
    var scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = storedWins;
}

function displayHighscoreList() {
    var highScore = highscoreArr

    highScore.innerHTML = highscoreArr.map(score => {
    return `<li class="high-score">${score.name}-${score.score}</li>`;
    });
}
// Make a function for localStorage so users can save their score

function saveScore() {
    var player = {
        user: user.value,
        score: score.value,
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem('player', JSON.stringify(player));
}
// then i made another fuction to render 
function renderScore() {
    // Use JSON.parse() to convert text to JavaScript object
    var thePlayer = JSON.parse(localStorage.getItem('player'));
    // Checking if data is returned, if not exit out of the function
    if (thePlayer !== null) {
        document.getElementById('saved-name').innerText = thePlayer.user;
        document.getElementById('saved-score').innerText = thePlayer.score;
    } else {
        return;
    }
}

// btnScore.addEventListener('click' ADD SAVE SCORE FUNCTION)

btnScore.addEventListener('click', function(event) {
    event.preventDefault();
    saveScore();
    renderScore();
});

// The init() function fires when the page is loaded 
function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    renderScore();
  }
  init();




getWins();
displayHighscoreList();


