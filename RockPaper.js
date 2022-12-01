let computerguess;
let buttonrock;
let buttonscissors;
let buttonpaper;
let score = 0;

function setup() {
  createCanvas(1280, 700);
 
  drawButtons();
}

function draw() {
 //just keep running 
  textSize(12);
  text('Add a point when you win, and Subtract when you loose with the buttons!', 10,250);
  textSize(15);
  text('Score: '+score, 160,530);


}

function rock() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  text('you chose rock', 50, 440);
  text('computer chose ' + computerguess, 200, 440);
  if(computerguess == 'rock'){
    text("It's a tie",150,470);
  } else if (computerguess == 'scissors'){
    text("You win!", 150,470);
  } else {
    text("You lose :(", 150,470);
  }
}

function paper() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  text('you chose paper', 50, 440);
  text('computer chose ' + computerguess, 200, 440);
  if(computerguess == 'paper'){
    text("It's a tie",150,470);
  } else if (computerguess == 'scissors'){
    text("You lose:(", 150,470);
  } else {
    text("You win! ", 150,470);
  }
}

function scissors() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  text('you chose scissors', 50, 440);
  text('computer chose ' + computerguess, 200, 440);
  if(computerguess == 'scissors'){
    text("It's a tie",150,470);
  } else if (computerguess == 'rock'){
    text("You win!", 150,470);
  } else {
    text("You lose :(", 150,470);
  }
}


function addPoints(){
  background(220);
  if (score >= 0)
    score+=1;
}

function minusPoints(){
  background(220);
  if(score>= 0)
    score-=1;
}

function drawButtons() {
  background(220);
  
  buttonadd =
  createButton('AddPoint');
  buttonadd.position(150,380);
  buttonadd.mousePressed(addPoints);
  
  buttonmin =
  createButton('MinusPoint');
  buttonmin.position(145,430);
  buttonmin.mousePressed(minusPoints);

  buttonrock = createButton('Rock');
  buttonrock.position(163, 110);
  buttonrock.mousePressed(rock);

  buttonpaper = createButton('Paper');
  buttonpaper.position(160, 170);
  buttonpaper.mousePressed(paper);

  buttonscissors = createButton('Scissors');
  buttonscissors.position(150, 230);
  buttonscissors.mousePressed(scissors);

  
  text("Rock, paper, scissors!", 130, 30);
  
}