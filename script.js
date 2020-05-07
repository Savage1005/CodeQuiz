var timerEl = document.getElementById("timer")
var start = document.getElementById("start")
var questionsEL = document.getElementById("questions")
var possibleAns = document.getElementById("possibleAns")
var results = document.getElementById("results")

var timeLeft = 75
var currentQuestion = 0

var questionsSelection = [
{
question : "How much money was Santana paid to play Woodstock?",
possibles :["$12000", "$750", "$23,500", "$5250"],
answer : "$750"
},
{
question : "Who is nicknamed the father of rock and roll?",
possibles: ["Elvis", "Buddy Holly", "Jerry Lee Lewis", "Chuck Berry"],
answer : "Chuck Berry"
},
{
question: "Where is the Rock and Roll hall of fame?",
possibles: ["Cleveland, Ohio", "New York, New York", "Canton, Ohio", "Nashville, Tennessee"],
answer: "Cleveland, Ohio"
},
{
question: "Who is the highest grossing Rock band of all time?",
possibles: ["The Rolling Stones", "Pink Floyd", "Led Zeppelin", "The Beatles"],
answer: "The Beatles"
},
{
question : "Which of these is not a name for one of Jerry Garcia's famous guitars?",
possibles : ["Tiger", "Jackal", "Wolf", "Alligator"],
answer: "Jackal"
}
]


//starts at button click to start the game 
function startGame() {
     questionsEL.innerHTML = "";
     possibleAns.innerHTML = "";
     var startQuestion = questionsSelection[currentQuestion].question;
     questionsEL.textContent = startQuestion;
     
     for (var i = 0; i< questionsSelection[currentQuestion].possibles.length; i++){
         var newButton = document.createElement("button")
         var newDiv = document.createElement("div")
         newButton.textContent = questionsSelection[currentQuestion].possibles[i];
         newButton.setAttribute("class", "btn btn-primary mb-2")
         newButton.value = questionsSelection[currentQuestion].possibles[i];
         newButton.onclick = checker
         newDiv.appendChild(newButton)
         possibleAns.appendChild(newDiv)
     }
    }
    

//checker to see if the answer is correct
function checker(event) {
    if(event.target.value===questionsSelection[currentQuestion].answer){
        console.log('correct')
    }else{
        timeLeft -= 10
    }
    currentQuestion++
    if(currentQuestion === questionsSelection.length){
        endGame()
        return
    }
    startGame()
}


//sets the timer
function startTime() {
  timer = setInterval(function () { 
     timeLeft --
     timerEl.textContent = "Time: " + timeLeft
     if (timeLeft === 0){
         endGame()
     }
 },1000)
}

//function for end of game
function endGame() {
    clearInterval(timer)
    questionsEL.innerHTML ="";
    possibleAns.innerHTML ="";
    results.textContent = `Game Over! Your Score is ${timeLeft}!!!!`;
    console.log()
}



start.addEventListener("click", function(){
    document.getElementById("start").innerHTML ="";
    startTime();
    startGame(questionsSelection) ;
});