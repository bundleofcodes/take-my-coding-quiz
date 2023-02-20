var startTheQuiz = document.getElementById ("startTheQuiz")
var startBtn = document.getElementById ("start-button")
var CodeQuiz = document.getElementById ("codeQuiz")
var quizTitle = document.getElementById ("quizTitle")
var OptionsEl = document.getElementById ("Options")

startBtn.addEventListener("click", StartQuiz);
function StartQuiz() {
    startTheQuiz.style.display="none";
    CodeQuiz.style.display="block";
    getQuestions()
}

var Questions = [
    {
        Title:"This is question 1",
        Options:["Option1","Option2","Option3","Option4"],
        Answer:"Option2"
    },
    {
        Title:"This is question 2",
        Options:["Option1","Option2","Option3","Option4"],
        Answer:"Option4"
    },
    {
        Title:"This is question 3",
        Options:["Option1","Option2","Option3","Option4"],
        Answer:"Option3"
    },
    {
        Title:"This is question 4",
        Options:["Option1","Option2","Option3","Option4"],
        Answer:"Option1"
    },
    {
        Title:"This is question 5",
        Options:["Option1","Option2","Option3","Option4"],
        Answer:"Option1"
    }
]
// console.log(Questions[1].Answer)
var questionIndex = 0

function getQuestions() {
    quizTitle.textContent= Questions[questionIndex].Title

    OptionsEl.textContent=""

    for (let i=0; i <Questions[questionIndex].Options.length; i++) {
        var OptionBtn=document.createElement("button");
        OptionBtn.textContent=Questions[questionIndex].Options[i];
        OptionBtn.onclick=getNextQuestion;
        OptionsEl.appendChild(OptionBtn);
    } 
}

function getNextQuestion() {
    questionIndex++;
    getQuestions();
}
