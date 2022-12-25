var saveBtn = document.querySelector('#save-btn');

var user = '';
var score = '';

function getWins() {
    var storedWins = localStorage.getItem('score');
    var scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = storedWins;
}
// Make a function for localStorage so users can save their score
function saveScore() {
    // update user and score variables to be the input with id "name" and the score comes from the localStorage score
    user = document.getElementById('name');
    score = localStorage.getItem('score');
    // making a variable that is an object containing the user and the score with the values
    var player = {
        // user.value refers to the input's value
        user: user.value,
        score: score
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem('player', JSON.stringify(player));
}
// then i made another fuction to render 
function renderScore() {
    var thePlayer = JSON.parse(localStorage.getItem('player'));
    // Checking if data is returned, if not exit out of the function

    // Making sure the player exists and is not null
    if (thePlayer !== null) {
        // Here we are getting the id 'saved-name' and 'saved-score' from html 
        // and setting the text of the tags to be the localStorage player user and score
        document.getElementById('saved-name').innerText = thePlayer.user;
        document.getElementById('saved-score').innerText = thePlayer.score;
    } else {
        return;
    }
}

// btnScore.addEventListener('click' ADD SAVE SCORE FUNCTION)
saveBtn.addEventListener('click', function (event) {
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
// displayHighscoreList();


