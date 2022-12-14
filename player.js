var questionDiv = document.querySelector("#question");
var choices = document.querySelectorAll(".choice-prefix");
var scoreText = document.querySelector("#timer-count");

// var scoreCounter = 0;
// var timer;
// var timerCount;
// var isTimer = false;
var secondsLeft = 30;
var timerInterval;

// Choices so we can set the textContent
var choiceA = document.getElementById('choiceA');
var choiceB = document.getElementById('choiceB');
var choiceC = document.getElementById('choiceC');
var choiceD = document.getElementById('choiceD');

var choicesArea = document.getElementById('choicesArea');

var question = [
    {
        question: "pick four",
        choice1: {
            choice: "1",
            correct: "false"
        },
        choice2: {
            choice: "2",
            correct: "false"
        },
        choice3: {
            choice: "3",
            correct: "false"
        },
        choice4: {
            choice: "4",
            correct: "true"
        },
    },
    {
        question: "Pick number 44.",
        choice1: {
            choice: "22",
            correct: "false"
        },
        choice2: {
            choice: "33",
            correct: "false"
        },
        choice3: {
            choice: "44",
            correct: "true"
        },
        choice4: {
            choice: "55",
            correct: "false"
        },
    },
    {
        question: "pick yes",
        choice1: {
            choice: "yes",
            correct: "false"
        },
        choice2: {
            choice: "no",
            correct: "true"
        },
        choice3: {
            choice: "green",
            correct: "false"
        },
        choice4: {
            choice: "yellow",
            correct: "false"
        },
    },

];

var questionIndex = 0;
// questionIndex we use to change our current slot in the question array
// if questionIndex is 1 then it would = question[1]
// if questionIndex is 2 then it would = question[2]

function displayQuestion() {
    console.log(questionIndex);
    questionDiv.textContent = question[questionIndex].question;
    // In this function we use our questionIndex so we don't have to make multiple functions per
    // We can use this one dynamic function to display our entire quiz
    // We use our questionIndex, which changes when we move to the next question


    choiceA.textContent = `A) ${question[questionIndex].choice1.choice}`;
    choiceB.textContent = `B) ${question[questionIndex].choice2.choice}`;
    choiceC.textContent = `C) ${question[questionIndex].choice3.choice}`;
    choiceD.textContent = `D) ${question[questionIndex].choice4.choice}`;

    choiceA.setAttribute('correct', question[questionIndex].choice1.correct);
    choiceB.setAttribute('correct', question[questionIndex].choice2.correct);
    choiceC.setAttribute('correct', question[questionIndex].choice3.correct);
    choiceD.setAttribute('correct', question[questionIndex].choice4.correct);
    // We create an attribute to detect which question is the right one
};
// Put a function for your timer
// focus on function for the timer
function setTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        var timeEl = document.getElementById('timer-count');
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            localStorage.setItem('score', secondsLeft);
            window.location.href = "highscore.html";
        }

    }, 1000)
}






choicesArea.addEventListener('click', function (event) {

    if (event.target.getAttribute('correct') === "true") {
        questionIndex++;
        if (questionIndex == 3) {
            clearInterval(timerInterval);
            localStorage.setItem('score', secondsLeft);
            window.location.href = "highscore.html";
        }
        displayQuestion();
    }
})

displayQuestion();
setTimer();

