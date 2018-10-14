let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

door1.onclick = () => {
  if (currentlyPlaying && !isClicked(door1)) {
  	door1.src = openDoor1;
  	playDoor(door1);
  }
}

door2.onclick = () => {
  if (currentlyPlaying && !isClicked(door2)) {
  	door2.src = openDoor2;
  	playDoor(door2);
  }
}

door3.onclick = () => {
  if (currentlyPlaying && !isClicked(door3)) {
  	door3.src = openDoor3;
  	playDoor(door3);
  }
}

startButton.onclick = () {
	startRound();
}

const startRound = () => {
  if (!cuurentlyPlaying) {
  	door1.src = closedDoorPath;
  	numClosedDoors = 3;
  	startButton.innedHTML = 'Good luck!';
  	currentlyPlaying = true;
  	randomChoreDoorGenerator();
  }
}

let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
let startButton = document.findElementById('start');
let currentlyPlaying = true;

const gameOver = status => {
  if (status==='win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}

const isBot = door => {
  if (door.src === botDoorPath) {
    return true;
    gameOver();
  } e;se {
    return false;
  }
}

const isClicked = door => {
  if (door.src===closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const playDoor = () => {
  numClosedDoors--;
  if (numClosedDoors===0) {
    gameOver('win');
  }
}

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choorDoor===0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choorDoor===1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
}

startRound();
