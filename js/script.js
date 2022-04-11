// generate computerSelection




//request playerSelection
function playerInput () {
    let goodInput = false;
    console.log(goodInput);
    while (goodInput === false) {
        let playerSelection = prompt("Type in your choise: Rock, Paper or Scissors.");
        //console.log(playerSelection);
        playerSelection = playerSelection.toLowerCase();
        //console.log(playerSelection);
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
            console.log('Good input!');
            goodInput = true;
            return playerSelection;
        }
        else {
            console.log('Bad input!');
            //return;
        }
    }
    }

function computerPlay (){
    const selectionArray = ['Rock','Paper','Scissors']
    computerSelection = selectionArray[Math.floor(Math.random()*3)]; //const randomElement = array[Math.floor(Math.random() * array.length)];
    //console.log(computerSelection);
    computerSelection = computerSelection.toLowerCase();
    return computerSelection;
    //console.log(computerSelection);
}



function playRound () {
    let playerSelection = playerInput();
    console.log("Player choice:", playerSelection);
    let computerSelection = computerPlay();
    console.log("Computer choice:", computerSelection);
    let resultWon = false;
if (playerSelection == computerSelection) {
    console.log('Draw!')
} else if (playerSelection=='rock' && computerSelection=='paper' ) {
    console.log('Rock loses to Paper! You lost!')
} else if (playerSelection=='rock' && computerSelection=='scissors' ) {
    console.log('Rock beats to Paper! You won!')
    resultWon = true;
} else if (playerSelection=='paper' && computerSelection=='rock' ) {
    console.log('Paper beats Rock! You won!')
    resultWon = true;
} else if (playerSelection=='paper' && computerSelection=='scissors' ) {
    console.log('Paper loses to scissors! You lost!')
} else if (playerSelection=='scissors' && computerSelection=='paper' ) {
    console.log('Scissors beat Paper! You won!')
    resultWon = true;
} else if (playerSelection=='scissors' && computerSelection=='rock' ) {
    console.log('Scissors lose to Rock! You lost')
} else {
    console.log('SOMETHING WENT WRONG!')
}
}
function game () {
    let winCounter = 0
    for (let i =0; i < 5; i++){
    playRound();
    console.log(winCounter)
    console.log('PLAYING!')

    }
}

game();
