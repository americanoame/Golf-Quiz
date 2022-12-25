// declaring varibles 
var questionDiv = document.querySelector("#question");
var choices = document.querySelectorAll(".choice-prefix");
var scoreText = document.querySelector("#timer-count");

// Global Varibles
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
        question: "who won the Master in april 1972?",
        choice1: {
            choice: "Arnold Palmer",
            correct: "false"
        },
        choice2: {
            choice: 'Tiger Woods',
            correct: "false"
        },
        choice3: {
            choice: "Sam Snead",
            correct: "false"
        },
        choice4: {
            choice: "Jack Nicklaus",
            correct: "true"
        },
    },
    {
        question: "Which years was The world's oldest golf tournament in existence?",
        choice1: {
            choice: "1698",
            correct: "false"
        },
        choice2: {
            choice: "1730",
            correct: "false"
        },
        choice3: {
            choice: "1860",
            correct: "true"
        },
        choice4: {
            choice: "1223",
            correct: "false"
        },
    },
    {
        question: "Us open Winner on 2012",
        choice1: {
            choice: "Webb Simpson",
            correct: "true"
        },
        choice2: {
            choice: "Jim Furyk",
            correct: "false"
        },
        choice3: {
            choice: "Davi Tomms",
            correct: "false"
        },
        choice4: {
            choice: "Ernie Els",
            correct: "false"
        },
        
    },
    {
        question: "How Many Amount of Tournament Are Required For PGA Player in a Season? ",
        choice1: {
            choice: "15",
            correct: "true"
        },
        choice2: {
            choice: "10",
            correct: "false"
        },
        choice3: {
            choice: "2",
            correct: "false"
        },
        choice4: {
            choice: "none of the above",
            correct: "false"
        },   
    },
    {
        question: "How Many Golf Clubs Are Allowed in a Golf Bag?",
        choice1: {
            choice: "21",
            correct: "false"
        },
        choice2: {
            choice: "14",
            correct: "true"
        },
        choice3: {
            choice: "17",
            correct: "false"
        },
        choice4: {
            choice: "13",
            correct: "false"
        },   
    },
];
// i made a varible  called questionIdex
var questionIndex = 0;
// questionIndex we use to change our current slot in the question array
// if questionIndex is 1 then it would = question[1]
// if questionIndex is 2 then it would = question[2]

function displayQuestion() {
    console.log(questionIndex);
    questionDiv.textContent = question[questionIndex].question;
    // In this function we use our questionIndex so we don't have to make multiple functions par
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

// function for countdown
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
        if (questionIndex == 5) {
            clearInterval(timerInterval);
            localStorage.setItem('score', secondsLeft);
            window.location.href = "highscore.html";
        }
        displayQuestion();
    } else {
        // When the answer isn't correct, subtract 3 seconds
        secondsLeft -= 3;
        // Remove the display-none class so it displays
        document.getElementById('checkAnswer').classList.remove('display-none');
        // after 2 seconds, it will hide the checkAnswer id div
        const hideIncorrect = setTimeout(hideAnswer, 2000)
    }
})

function hideAnswer() {
    document.getElementById('checkAnswer').classList.add('display-none')
}

displayQuestion();
setTimer();

