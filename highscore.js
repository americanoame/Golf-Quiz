var saveBtn = document.querySelector('#save-btn');

// array to hold the user and score
var user = '';
var score = '';

// function to save
function getWins() {
    var storedWins = localStorage.getItem('score');
    var scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = storedWins;
}
// Make a function for localStorage so users can save their score
function saveScore() {

    user = document.getElementById('name');
    score = localStorage.getItem('score');  
    var player = {

        user: user.value,
        score: score
    };
    // .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem('player', JSON.stringify(player));
}
// then i made another fuction to render 
// Checking if data is returned, if not exit out of the function

function renderScore() {
    var thePlayer = JSON.parse(localStorage.getItem('player'));
    
    // Making sure the player exists and is not null
    // then we are getting the id 'saved-name' and 'saved-score' from html 
    // and setting the text of the tags to be the localStorage player user and score
    if (thePlayer !== null) {
        
        document.getElementById('saved-name').innerText = thePlayer.user;
        document.getElementById('saved-score').innerText = thePlayer.score;
    } else {
        return;
    }
}

// btnScore.addEventListener('click' add save score function)
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


