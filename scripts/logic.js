let playGame = document.querySelector('#game-btn')

playGame.addEventListener('click', game())



function computerPlay(){
  let choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random()*choices.length)]
}

function getPlayerSelection(){
  let userInp = prompt("Rock, Paper, or Scissors?").trim().toLowerCase();
  return userInp  
}

function playRound(){
  // rock beats scissors
  // scissors beats paper
  // paper beats rock
  let result;

  let computerSelection = computerPlay();
  let playerSelection = getPlayerSelection(); 

  if(
    playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock'
  ){
    result = 1
  } else if (playerSelection === computerSelection) {
    result = 0
  } else {
    result = -1
  } 
  return result 
}

function game(){
  let roundResults = [];
  let scoreCard;
  let wins, ties, losses, winner; 

  for(let i = 0; i < 5; i++){
    roundResults.push(playRound())
  }

  wins = roundResults.filter((v) => v > 0).length
  ties = roundResults.filter((v) => v === 0).length
  losses = roundResults.filter((v) => v < 0).length
  if(wins - losses > 0){
    winner = 'You are the winner!'
  } else if ( wins - losses < 0) {
    winner = 'The computer won. Boo.'
  } else {
    winner = 'This is unprecedented! YOU AND THE COMPUTER BOTH LOST! I win ;)'
  }

  document.getElementById("gameResult").innerHTML =`${winner} You won a total of ${wins} time(s), tied a total of ${ties} time(s), and lost a total of ${losses} time(s).` 

}

