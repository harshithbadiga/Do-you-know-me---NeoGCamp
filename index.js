var readlineSync = require('readline-sync');
var userName = readlineSync.question("Hello!,Whats your name!")
console.log("Welcome " + userName +",to do you know Harshith!");
var score = 0;

var highScores = [{
  name: "Harshith",
  score: 2
},{
  name: "badiga",
  score:1
}];


function play(question,answer){
  var userAnswer = readlineSync.question(question)
  if(answer.toUpperCase() === userAnswer.toUpperCase()){
    console.log("right!!")
    score++

  } else{
    console.log("wrong!")
  }
    console.log("current score:", score)
    console.log("--------------")
}

var questions = [{
  question: "Where do I live?",
  answer: "doha"
},{
  question:"Where am I studying?",
  answer: "mit"
}];

for (var i=0; i <questions.length; i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
  console.log("Your final score is:",score)

}
showScores();

  function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

 





