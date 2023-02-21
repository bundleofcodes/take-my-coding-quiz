var startHere = document.querySelector(".lets-start");
var readySetStart = document.querySelector(".the-starter");
var beginQuiz = document.querySelector(".the-quiz");
var endQuiz = document.querySelector(".the-final");

var timerInterval;
var timerEl = document.getElementById("the-timer");
var questionEL = document.getElementById("question");

var select1 = document.getElementById("option1");
var select2 = document.getElementById("option2");
var select3 = document.getElementById("option3");
var select4 = document.getElementById("option4");

var correctIncorrect = document.getElementById("correct-incorrect");
var timeLeft = 75;
var index = 0;

var quizOver = document.querySelector(".endButton");
var theScore = document.getElementById("userScore");
var inputForm = document.querySelector(".initialsInput");

var seeYourScore = document.querySelector(".the-highscore");

var goBack = document.querySelector(".goBack");
var goBackAgain = document.querySelector(".goBackAgain");

var clearScore = document.querySelector(".clearScore");
var viewScore = document.querySelector(".highscore-button");
var restartQuiz = document.querySelector(".restart-button");

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var checkHighscores = document.getElementById("checkTheHighscores");

goBack.style.display = "none";
goBackAgain.style.display = "none";

beginQuiz.style.display = "none";
endQuiz.style.display = "none";
seeYourScore.style.display = "none";


startHere.addEventListener("click", function () {
    readySetStart.style.display = "none";
    beginQuiz.style.display = "flex";
    countDown();
    getNextQuestion(0);
});

function countDown() {


    timerInterval = setInterval(function () {
        timerEl.innerHTML = 'Timer: ' + timeLeft;
        // console.log(timeLeft);
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            beginQuiz.style.display = "none";
            endQuiz.style.display = "flex";
            userScore.innerHTML = "Sorry, your time has expired!"
            inputForm.style.display = "none";
        }
    }, 1000);

}

function deductTime(seconds) {
    timeLeft -= seconds;
}

var questions = [
    {
        question: '1. In which HTML elements do we put in JavaScript code?',
        answers: [
            { text: 'head', correct: false },
            { text: 'body', correct: false },
            { text: 'script', correct: true },
            { text: 'js', correct: false }
        ]
    },
    {
        question: '2. Is Javascript the same as the "Java" programming language?',
        answers: [
            { text: 'Almost', correct: false },
            { text: 'No', correct: true },
            { text: 'Yes', correct: false },
            { text: 'None of the above', correct: false }
        ]

    },
    {
        question: '3. Which HTML attribute is used to reference an external JavaScript file?',
        answers: [
            { text: 'src', correct: true },
            { text: 'rel', correct: false },
            { text: 'type', correct: false },
            { text: 'href', correct: false }
        ]

    },
    {
        question: '4. A variable in JavaScript must start with which special character?',
        answers: [
            { text: '@', correct: false },
            { text: '$', correct: false },
            { text: '#', correct: false },
            { text: 'No Special Character', correct: true }
        ]

    },
    {
        question: '5. How do you comment a line out in JavaScript?',
        answers: [
            { text: '+', correct: false },
            { text: '//', correct: true },
            { text: '%', correct: false },
            { text: '!', correct: false }
        ]

    }
]

function getNextQuestion(index) {

    if (index >= questions.length) {
        clearInterval(timerInterval);
        beginQuiz.style.display = "none";
        endQuiz.style.display = "flex";
        timerEl.innerHTML = "Sorry, Your time has expired!";
        userScore.innerHTML = "Your score is: " + timeLeft;
        return;
    }

    document.getElementById("question").innerHTML = questions[index].question;
    document.getElementById("option1").innerHTML = questions[index].answers[0].text;
    document.getElementById("option2").innerHTML = questions[index].answers[1].text;
    document.getElementById("option3").innerHTML = questions[index].answers[2].text;
    document.getElementById("option4").innerHTML = questions[index].answers[3].text;
}

if (index <= 3) {
    select1.addEventListener('click', function () {
        console.log(questions[index]);
        if (questions[index].answers[0].correct === true) {
            correctIncorrect.innerHTML = 'Correct!';
            index++;
            return getNextQuestion(index);
        } else {
            correctIncorrect.innerHTML = 'Incorrect!';
            deductTime(10);
            index++;
            return getNextQuestion(index);
        }
    });

    select2.addEventListener('click', function () {
        console.log(questions[index]);
        if (questions[index].answers[1].correct === true) {
            correctIncorrect.innerHTML = 'Correct!';
            index++;
            return getNextQuestion(index);
        } else {
            correctIncorrect.innerHTML = 'Incorrect!';
            deductTime(10);
            index++;
            return getNextQuestion(index);
        }
    });

    select3.addEventListener('click', function () {
        console.log(questions[index]);
        if (questions[index].answers[2].correct === true) {
            correctIncorrect.innerHTML = 'Correct!';
            index++;
            return getNextQuestion(index);
        } else {
            correctIncorrect.innerHTML = 'Incorrect!';
            deductTime(10);
            index++;
            return getNextQuestion(index);
        }
    });

    select4.addEventListener('click', function () {
        console.log(questions[index]);
        if (questions[index].answers[3].correct === true) {
            correctIncorrect.innerHTML = 'Correct!';
            index++;
            return getNextQuestion(index);
        } else {
            correctIncorrect.innerHTML = 'Incorrect!';
            deductTime(10);
            index++;
            return getNextQuestion(index);
        }
    });
}

quizOver.addEventListener('click', function (event) {
    event.preventDefault();
    goBack.style.display = "block";
    goBackAgain.style.display = "none";


    var userInitials = document.getElementById("user-initials").value;
    var message = document.querySelector(".msg-space");

    if (userInitials === "") {
        message.innerHTML = "Please input your initials"
        return;
    }

    seeYourScore.style.display = "flex";
    endQuiz.style.display = "none";

    highscores.push({ userInitials, timeLeft });

    localStorage.setItem("highscores", JSON.stringify(highscores));
    console.log(highscores);


    checkTheHighscores.innerHTML = "";
    for (var i = 0; i < highscores.length; i++) {
        var li = document.createElement("li");
        li.textContent = highscores[i].userInitials + " - " + highscores[i].timeLeft;
        checkTheHighscores.appendChild(li);
    }
});

goBack.addEventListener('click', function () {
    endQuiz.style.display = "flex";
    seeYourScore.style.display = "none";
});

goBackAgain.addEventListener('click', function () {
    readySetStart.style.display = "flex";
    seeYourScore.style.display = "none";
});


clearScore.addEventListener('click', function () {
    localStorage.clear();
    checkTheHighscores.textContent = "";
});

restartQuiz.addEventListener('click', function () {
    endQuiz.style.display = "none";
    readySetStart.style.display = "flex";
    location.reload();
});

viewScore.addEventListener('click', function () {
    readySetStart.style.display = "none";
    beginQuiz.style.display = "none";
    endQuiz.style.display = "none";
    seeYourScore.style.display = "flex";
    goBackAgain.style.display = "block";


    checkHighscores.innerHTML = "";
    for (var i = 0; i < highscores.length; i++) {
        var li = document.createElement("li");
        li.textContent = highscores[i].userInitials + " - " + highscores[i].timeLeft;
        checkHighscores.appendChild(li);
    }

});