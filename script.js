let allQuestions = {

easy: [
{q:"2+2?",a:"3",b:"4",c:"5",d:"6",correct:"b"},
{q:"Sun rises in?",a:"West",b:"East",c:"North",d:"South",correct:"b"},
{q:"Water formula?",a:"CO2",b:"H2O",c:"O2",d:"NaCl",correct:"b"},
{q:"5+3?",a:"7",b:"8",c:"9",d:"6",correct:"b"},
{q:"Capital of India?",a:"Delhi",b:"Mumbai",c:"Chennai",d:"Kolkata",correct:"a"}
],

medium: [
{q:"HTML stands for?",a:"Hyper Text Markup Language",b:"High Text",c:"None",d:"Low",correct:"a"},
{q:"CSS used for?",a:"Design",b:"Logic",c:"Data",d:"Server",correct:"a"},
{q:"JS is?",a:"Language",b:"Animal",c:"Car",d:"Food",correct:"a"},
{q:"3*3?",a:"6",b:"9",c:"12",d:"3",correct:"b"},
{q:"Which is browser?",a:"Chrome",b:"Python",c:"Java",d:"C++",correct:"a"}
],

hard: [
{q:"Which is JS framework?",a:"React",b:"C",c:"Java",d:"Python",correct:"a"},
{q:"Which is not language?",a:"HTML",b:"Java",c:"Python",d:"C++",correct:"a"},
{q:"CSS property for color?",a:"color",b:"font",c:"bg",d:"design",correct:"a"},
{q:"10/2?",a:"2",b:"5",c:"10",d:"8",correct:"b"},
{q:"Backend language?",a:"Node.js",b:"HTML",c:"CSS",d:"None",correct:"a"}
]

};

let questions = [];
let index = 0;
let score = 0;
let timer;
let timeLeft = 100;
let username = "";
let userAnswers = [];

function startQuiz(){
    username = document.getElementById("username").value;

    if(username === ""){
        alert("Enter name!");
        return;
    }

    let diff = document.getElementById("difficulty").value;
    questions = allQuestions[diff];

    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");

    loadQuestion();
}

function loadQuestion(){
    let q = questions[index];

    document.getElementById("question").innerText = q.q;
    document.getElementById("a").innerText = q.a;
    document.getElementById("b").innerText = q.b;
    document.getElementById("c").innerText = q.c;
    document.getElementById("d").innerText = q.d;

    document.getElementById("progress").innerText =
        `Question ${index+1}/${questions.length}`;

    startTimer();
}

function selectAnswer(ans){
    let correct = questions[index].correct;

    userAnswers.push({
        question: questions[index].q,
        selected: ans,
        correct: correct
    });

    if(ans === correct){
        score++;
    }

    nextQuestion();
}

function nextQuestion(){
    index++;
    if(index < questions.length){
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult(){
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    let percent = Math.round((score / questions.length) * 100);

    document.getElementById("result").innerText =
        `${username}, Score: ${score}/${questions.length}`;

    document.getElementById("percentage").innerText =
        `Percentage: ${percent}%`;
}

function showReview(){
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("review-screen").classList.remove("hidden");

    let div = document.getElementById("review");
    div.innerHTML = "";

    userAnswers.forEach(item=>{
        let p = document.createElement("p");
        p.innerText =
        `${item.question} | Your: ${item.selected} | Correct: ${item.correct}`;
        div.appendChild(p);
    });
}

function restartQuiz(){
    location.reload();
}

function startTimer(){
    clearInterval(timer);
    timeLeft = 100;

    timer = setInterval(()=>{
        document.getElementById("timerBar").style.width = timeLeft + "%";
        timeLeft--;

        if(timeLeft <= 0){
    clearInterval(timer);
    quizOver();
}
    },100);
}
function quizOver(){
    alert("⏰ Time's up! Quiz Over");

    // reset values
    index = 0;
    score = 0;
    userAnswers = [];

    // go back to login screen
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("review-screen").classList.add("hidden");

    document.getElementById("start-screen").classList.remove("hidden");
}
