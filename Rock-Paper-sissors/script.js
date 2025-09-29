let playerScore = 0;
let computerScore = 0;

function playGame(playerMove) {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber < 2/3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }

  let result = '';

  if (playerMove === computerMove) {
    result = "It's a Tie!";
  } else if (
    (playerMove === 'Rock' && computerMove === 'Scissors') ||
    (playerMove === 'Paper' && computerMove === 'Rock') ||
    (playerMove === 'Scissors' && computerMove === 'Paper')
  ) {
    result = "You Win!";
    playerScore++;
  } else {
    result = "You Lose!";
    computerScore++;
  }

  // Update result text
  document.getElementById("result-text").textContent = 
    `You chose ${playerMove}, computer chose ${computerMove}. ${result}`;

  // Update score
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}
