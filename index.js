var chalk=require("chalk");
console.log(chalk.magenta("Are you a Liverpool Supporter? Let's check your knowledge \n"));
var readlineSync=require("readline-sync");
console.log(chalk.red("There are 3 level in the Game \nIf you score atleast 3 in level1 you advance to level2 \nIf you score atleast 7 after level2 you advance to level3 \n"))
var score=0;
var username=readlineSync.question("Please enter your name \n");

// function to check the answer and calculate the score
function playgame(question,answer){
  var useranswer=readlineSync.question(question);
  if(useranswer==answer){
    console.log(chalk.underline("You are a red"));
    score+=1;
  }
    else {
    console.log(chalk.underline("Not a red"));
    }
    console.log(chalk.green("Your score",score));
    console.log("-----");
  
}
var question1={
  question:chalk.blue.bold("How many times Liverpool won UCL? \n a)4 \n b)6 \n c)5 \n "),
  answer: "b"
}
var question2={
  question:chalk.blue.bold("Who is the coach of Liverpool? \n a)Jurgen Klopp \n b)Andre Pirlo \n c)Pep Guardiola \n")  ,
  answer:"a"
}
var question3={
  question:chalk.blue.bold("After how many years Liverpool won Premere League? \n a)33 years \n b)27 years \n c)30 years \n"),
  answer:"c"
}
var question4={
  question:chalk.blue.bold("Who are the biggest rival of Liverpool? \n a)Real Madrid \n b)Manchester United \n c)Manchester City \n"),
  answer:"b"
}
var question5={
  question:chalk.blue.bold("Which Liverpool player has the highest market value? \n a)Mohammad Salah \n b)Virgil Van Djik \n c)Jordan Henderson \n"),
  answer:"a"
}
var question6={
  question:chalk.blue.bold("What is the name of stadium in which Liverpool play? \n a)Anfield \n b)Old Trafford \n c)Goddison Park \n"),
  answer:"a"
}
var question7={
  question:chalk.blue.bold("In which year Liverpool was formed? \n a)1888 \n b)1902 \n c)1892\n"),
  answer:"c"
}
var question8={
  question:chalk.blue.bold("In which country is Liverpool located? \n a)Spain \n b)England \n c)Italy \n"),
  answer:"b"
}
var question9={
  question:chalk.blue.bold("Who holds the jersey number 66 in Liverpool? \n a)Trent \n b)Sadio Mane \n c)Allison Becker \n"),
  answer:"a"
}
var question10={
  question:chalk.blue.bold("Who is the current top-scorer for Liverpool? \n a)Mohammad Salah \n b)Firmino \n c)Ian Rush \n"),
  answer:"c"
}
var question11={
  question:chalk.blue.bold("Who is the latest signing for Liverpool \n a)Thiago \n b)Diogo Jota \n c)Williams \n"),
  answer:"b"
}
var question12={
  question:chalk.blue.bold("How many times Liverpool won the Premere League? \n a)21 \n b)20 \n c)19 \n"),
  answer:"c"
}
var highscore1={
  user:"Imroz",
  score:"11"
}
var highscore2={
  user:"Aditya",
  score:"8"
}
// to check and update the high score
var highscore=[highscore1,highscore2];
// questions for level one 
var questions=[question1,question2,question3,question4,question5];
// questions for level two
var questionlevelone=[question6,question7,question8,question9,question10];
// questions for level 3
var questionleveltwo=[question11,question12];
// calling function for level1
for(var i=0;i<questions.length;i++){
  var current=questions[i]; 
  playgame(current.question,current.answer);
}
// calling function for level2
if(score>=3){
  console.log(chalk.yellow("Congrats you advance to level two \n"));
  for(var i=0;i<questionlevelone.length;i++){
    var currentone=questionlevelone[i];
    playgame(currentone.question,currentone.answer);
  }
}
else{
  console.log(chalk.yellow("Your score is not enough to advance to level two"));
}
// calling function for level3
if(score>=7){
  console.log(chalk.yellow("Congrats you advance to level three \n"));
  for(var i=0;i<questionleveltwo.length;i++){
    var currenttwo=questionleveltwo[i];
    playgame(currenttwo.question,currenttwo.answer);
  }
}
else if(score>=3 && score<7){
  console.log(chalk.black("Your score is not enough to advance to level three"));
}
console.log(chalk.yellow.underline("\nYour final score is",score));
// checking score of user and high score 
for(var i=0;i<highscore.length;i++){
  var current=highscore[i];
  if(score>current.score){
    current.user=username;
    current.score=score;

    console.log(chalk.red.bold("You have created a new high score \nPlease send the screenshot of your score card so that we can update the high score \nYou will get a free ticket to watch live match of Liverpool"));
    break;
  }
}
console.log(chalk.black("Current LeaderBoard"));
for(var i=0;i<highscore.length;i++){
  current=highscore[i];

  console.log(chalk.magenta(current.user,current.score ));
}