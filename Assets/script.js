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
        question: '1. Question1?',
        answers: [
            { text: 'Answer A', correct: true },
            { text: 'Answer B', correct: false },
            { text: 'Answer C', correct: false },
            { text: 'Answer D', correct: false }
        ]
    },
    {
        question: '2. Question2?',
        answers: [
            { text: 'Answer A', correct: true },
            { text: 'Answer B', correct: false },
            { text: 'Answer C', correct: false },
            { text: 'Answer D', correct: false }
        ]

    },
    {
        question: '3. Question3?',
        answers: [
            { text: 'Answer A', correct: false },
            { text: 'Answer B', correct: false },
            { text: 'Answer C', correct: true },
            { text: 'Answer D', correct: false }
        ]

    },
    {
        question: '4. Question4?',
        answers: [
            { text: 'Answer A', correct: false },
            { text: 'Answer B', correct: false },
            { text: 'Answer C', correct: false },
            { text: 'Answer D', correct: true }
        ]

    },
    {
        question: '5. Question5?',
        answers: [
            { text: 'Answer A', correct: false },
            { text: 'Answer B', correct: true },
            { text: 'Answer C', correct: false },
            { text: 'Answer D', correct: false }
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




// var startTheQuiz = document.getElementById ("startTheQuiz");
// var startBtn = document.getElementById ("start-button");
// var CodeQuiz = document.getElementById ("codeQuiz");
// var quizTitle = document.getElementById ("quizTitle");
// var OptionsEl = document.getElementById ("Options");
// var timerCountdown = document.querySelector (".start-timer");
// var Timer;
// var timerCount=  75;
// var scoreDivEl = document.getElementById ("scoreDiv");
// var inputEl = document.getElementById ("intialsInput")

// // console.log(timer-Count);

// function startTimer() {
//     Timer = setInterval(function() {
//         timerCount--;
//         timerCountdown.textContent =timerCount;
//         if (timerCount === 0) {
//                 clearInterval(Timer);
//         }
//     }, 1000);
// }

// startBtn.addEventListener("click", StartQuiz);
// function StartQuiz() {
//     startTheQuiz.style.display="none";
//     CodeQuiz.style.display="block";
//     getQuestions()
//     startTimer()
// }

// var Questions = [
//     {
//         Title:"This is question 1",
//         Options:["Option1","Option2","Option3","Option4"],
//         Answer:"Option2"
//     },
//     {
//         Title:"This is question 2",
//         Options:["Option1","Option2","Option3","Option4"],
//         Answer:"Option4"
//     },
//     {
//         Title:"This is question 3",
//         Options:["Option1","Option2","Option3","Option4"],
//         Answer:"Option3"
//     },
//     {
//         Title:"This is question 4",
//         Options:["Option1","Option2","Option3","Option4"],
//         Answer:"Option1"
//     },
//     {
//         Title:"This is question 5",
//         Options:["Option1","Option2","Option3","Option4"],
//         Answer:"Option1"
//     }
// ]
// // console.log(Questions[1].Answer)
// var questionIndex = 0

// function getQuestions() {
//     quizTitle.textContent= Questions[questionIndex].Title

//     OptionsEl.textContent=""

//     for (let i=0; i <Questions[questionIndex].Options.length; i++) {
//         var OptionBtn=document.createElement("button");
//         OptionBtn.textContent=Questions[questionIndex].Options[i];
//         OptionBtn.onclick=getNextQuestion;
//         OptionsEl.appendChild(OptionBtn);
//     } 
// }

// function getNextQuestion() {
//     questionIndex++;
//     if(timerCount === 0 || questionIndex >= Questions.length) {
//         EndTheQuiz();
//     }
//     else {
//         getQuestions();
//     }
//     if(Questions[questionIndex].Answer)
// }

// function EndTheQuiz () {
//     clearInterval(Timer);
//     CodeQuiz.style.display="none";
//     scoreDivEl.style.display="block";
//     inputEl.style.display="block";
// }

// // localStorage.setItem("input", initialsInput);