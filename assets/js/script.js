var startQuizE1 = document.querySelector("#start-quiz");
console.log("hello-");
var quesNum = 0;
var ansFlag = 'Wrong';
var ansButt = [];
function answerEventListener() {
    ansButt[0].addEventListener('click',function(){
console.log("hello 3");
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
    console.log("hello 4");
    quesNum = quesNum + 1;
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
   previousResult.textContent = ansFlag;
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
        "printing content to the debugger is:",
        "correct": "4",
        "answers":["1. JavaScript",
                  "2. Terminal/Bash",
                  "3. for Loops",
                  "4. console.log"]
    }
]
   

startQuizE1.addEventListener('click',function() {
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