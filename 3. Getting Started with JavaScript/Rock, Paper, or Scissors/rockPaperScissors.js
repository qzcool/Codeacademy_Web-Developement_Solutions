// Bomb method required in the last step is not included in this solution.
console.log('Bomb method required in the last step is not included in this solution.');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  switch (userInput) {
    case 'rock' || 'paper' || 'scissors':
      return userInput;
    default:
      console.log('Error userInput.');
  }
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3)
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      console.log('Error computer choice, which is impossible.');
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice===computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice==='rock') {
    if (computerChoice==='paper') {
      return 'Computer won.';
    } else {
      return 'User won.';
    }
  }
  if (userChoice==='paper') {
    if (computerChoice==='scissors') {
      return 'Computer won.';
    } else {
      return 'User won.';
    }
  }
  if (userChoice==='scissors') {
    if (computerChoice==='rock') {
      return 'Computer won.';
    } else {
      return 'User won.';
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('rock');
  console.log(userChoice);
  let computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice,computerChoice))
}

playGame()
