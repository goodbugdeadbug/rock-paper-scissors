// generate computerSelection
const selectionArray = ['Rock','Paper','Scissors']
let computerSelection = selectionArray[Math.floor(Math.random()*3)]; //const randomElement = array[Math.floor(Math.random() * array.length)];
console.log(computerSelection);



//request playerSelection
let playerSelection = prompt("Type in your choise: Rock, Paper or Scissors. Input is case-sensitive");
playerSelection = playerSelection.toLowerCase();
if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
    console.log('Good input!');
}
else {
    console.log('Bad input!');
}
console.log(playerSelection);

function computerPlay (playerSelection, computerSelection){
}

//run comparison for every combination
//show result in console
