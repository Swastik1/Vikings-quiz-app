var readLineSync = require('readline-sync');
var score = 0;
var userName = readLineSync.question("What's your name? ");

function welcome(){
  console.log("Hey " + userName + " Are you a Vikings fan? \nLets start playing! ");
}


function play(question,answer){
  var userName = readLineSync.question(question);
  if (userName.toUpperCase() === answer.toUpperCase()){
    score = score + 1;
    console.log("This is correct!");
  } else {
    console.log("Wrong Answer!")
  }
  console.log(score);
  console.log("---------");
}

var highscores = [
  {
    name: "Akshay",
    score: "3"
  },

  {
    name: "Samar",
    score: "4"
  }
]

var questions = [
  {
    question : `From which area in the world did the Vikings come from?
 
    a: North Africa 
    b: North Europe 
    c: North America
    d: South Africa \n` , 
    
    answer : `b`,
  },

  {
    question : `The first Viking raid on the British Isles happened at Lindisfarne but in what year? 
      a: 799 
      b: 795 
      c: 793 
      d: 790 \n `,

    answer: `c`
  },

  {
    question : `What does Floki build that makes him famous?? 
      a: Shields
      b: Latters 
      c: Ships 
      d: Houses \n `,

    answer: `c`,
  }, 

  {
    question : `What does Ragnar choose to keep from his first raid? 
      a: A golden arm band 
      b: A Christian Monk 
      c: A well crafted sword 
      d: A map \n `,

    answer: `b`,
  },

  {
    question: `Who is Lagertha?
      a: A Shield-Maiden
      b: A ShipWright
      c: A Norse God
      d: A Christian Nun \n `,

    answer: "a",
  }
]


function quiz(){
  for (var i = 0; i < questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer);
  }
  displayFinalScore();
}



function showHighScore(){
  
  if (score > 3){
    highscores.push({name : userName, score: score});
    console.log("You beat the highscores yayyy !");
    console.log("----------")
  } else (
    console.log("----------")
  )
  
  console.log("Check out the highscores!!");
  highscores.map(score => console.log(score.name,score.score));
}

function displayFinalScore(){
  if (score > 3){
    console.log("Nice Job! You are a true fan! \nYou scored " + score);
  } else {
    console.log("You need to watch Vikings!! \nYou scored " + score);
  }
}

welcome();
quiz();
showHighScore();

