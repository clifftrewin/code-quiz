var startQuizE1 = document.querySelector("#start-quiz");
var timerSpan = document.querySelector("#seconds");
var timerInterval = 0;
var quesNum = 0;
var secondsLeft = 75;
timerSpan.textContent = secondsLeft;
var ansButt = [];

function answerEventListener() {
    ansButt[0].addEventListener('click',function(){
    if (quiz[quesNum].correct === '1'){
        ansFlag = 'Correct';} else {  
        ansFlag = 'Wrong';
        }
        nextQuestion ();
    });
    ansButt[1].addEventListener('click',function(){
        if (quiz[quesNum].correct === '2'){
            ansFlag = 'Correct';} else {
            ansFlag = 'Wrong';
            }
       nextQuestion ();
    });
    ansButt[2].addEventListener('click',function(){
        if (quiz[quesNum].correct === '3'){
            ansFlag = 'Correct';} else {
            ansFlag = 'Wrong';
            }
        nextQuestion ();
    });
    ansButt[3].addEventListener('click',function(){
        if (quiz[quesNum].correct === '4'){
            ansFlag = 'Correct';} else {
            ansFlag = 'Wrong';
            } 
       nextQuestion ();
    });
}

function nextQuestion () {
    quesNum = quesNum + 1;
    if (ansFlag === "Wrong")
    {secondsLeft = secondsLeft-10;}
    if (quesNum > 4) {
        timerSpan.textContent = secondsLeft;
        clearInterval(timerInterval);
        allDone ();
    }
    document.body.children[0].children[1].textContent = quiz[quesNum].question; 
    for (let i = 0; i < 4; i++) {
       ansButt[i].textContent = quiz[quesNum].answers[i];
    }
   if (quesNum === 1)   {
    var previousResultCont = document.createElement("div");
    var previousResult = document.createElement("h2");
   document.body.appendChild(previousResultCont);
   previousResultCont.appendChild(previousResult);
   previousResultCont.setAttribute("style","display:flex; justify-content: center; border-top: 5px solid rgba(0,0,0,20%); width: 500px; margin: auto; margin-top: 50px; align-items:flex-start;");
   previousResult.setAttribute("style","color: rgba(0,0,0,20%); font-size :24px; font-style: italic;");
   } 
   document.body.children[7].children[0].textContent = ansFlag;
}

function allDone () {
    document.body.children[0].children[1].textContent = "All Done!"
    document.body.children[1].textContent = "Your final score is "+secondsLeft;
    document.body.children[7].children[0].textContent = ansFlag;
    document.body.children[3].remove();
    document.body.children[3].remove();
    document.body.children[3].remove();
    document.body.children[3].remove();
    var submitCont = document.createElement("div");
    var enterInit = document.createElement("h2");
    var inputField = document.createElement("input");
    var submitButt = document.createElement("button");
    document.body.insertBefore(submitCont,document.body.children[3]);
    submitCont.appendChild(enterInit);
    submitCont.appendChild(inputField);
    submitCont.appendChild(submitButt);
    submitCont.setAttribute("style","display:flex; justify-content: center; margin-top: 30px;");
    enterInit.setAttribute("style","font-size: 16px;");
    inputField.setAttribute("style","border: 2px solid black;");
    submitButt.setAttribute("style","color:white; background-color:indigo; font-size: 16px; margin-left: 20px;");
    enterInit.textContent = "Enter Initials";
    submitButt.textContent = "Submit";
}

let quiz = [
    {
        "question": "Commonly Used data types DO NOT include:",
        "correct": "3",
        "answers": ["1. strings",
                    "2. booleans",
                    "3. alerts",
                    "4. numbers"]
    },
    {
       "question": "The condition in an if/else statement is enclosed within _________",
       "correct": "3",
       "answers":["1. quotes",
                 "2. curly brackets",
                 "3. parentheses",
                 "4. square brackets"]
    },
    {
        "question": "Arrays in JavaScript can be used to store ___________",
        "correct": "4",
        "answers":["1. numbers and strings",
                  "2. other arrays",
                  "3. booleans",
                  "4. all of the above"]
    },
    {
        "question": "String values must be enclosed within __________ when being assigned to variables",
        "correct": "3",
        "answers":[ "1. commas",
                    "2. curly brackets",
                    "3. quotes",
                    "4. parentheses"]
    },
    {
        "question": "A very useful tool used during development and debugging for" +
        " printing content to the debugger is:",
        "correct": "4",
        "answers":["1. JavaScript",
                  "2. Terminal/Bash",
                  "3. for Loops",
                  "4. console.log"]
    }
]
   

startQuizE1.addEventListener('click',function() {
    timerInterval = setInterval(function()  {
        secondsLeft--
        timerSpan.textContent = secondsLeft;
    },1000);
    console.log(timerInterval);
   var bCont = [];
   document.body.children[0].children[1].textContent = quiz[0].question; 
   document.body.children[1].textContent = '';
   document.body.removeChild(document.body.children[2]);
   for (let i = 0; i < 4; i++) {
   bCont[i] = document.createElement("div");
   ansButt[i] = document.createElement("button");
   document.body.appendChild(bCont[i]);
   bCont[i].appendChild(ansButt[i]);
   bCont[i].setAttribute("style","margin-top: 50px; height: 40px; display: flex; justify-content: center;");
   ansButt[i].setAttribute("style","color: white; background-color: indigo; font-size: 24px;");
   ansButt[i].textContent = quiz[0].answers[i];
   };
   console.log("hello2");
  answerEventListener();
});