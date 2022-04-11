//request player input
function playerInput () {
    let goodInput = false;
    //console.log(goodInput);
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

//generate computer input
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
    //let resultWon = false;
if (playerSelection == computerSelection) {
    console.log('Draw!')
    return false;
} else if (playerSelection=='rock' && computerSelection=='paper' ) {
    console.log('Rock loses to Paper! You lost!')
    return false;
} else if (playerSelection=='rock' && computerSelection=='scissors' ) {
    console.log('Rock beats to Paper! You won!')
    return true;
} else if (playerSelection=='paper' && computerSelection=='rock' ) {
    console.log('Paper beats Rock! You won!')
    return true;
} else if (playerSelection=='paper' && computerSelection=='scissors' ) {
    console.log('Paper loses to scissors! You lost!')
    return false;
} else if (playerSelection=='scissors' && computerSelection=='paper' ) {
    console.log('Scissors beat Paper! You won!')
    return true;
} else if (playerSelection=='scissors' && computerSelection=='rock' ) {
    console.log('Scissors lose to Rock! You lost')
    return false;
} else {
    console.log('ERROR in playRound() SOMETHING WENT WRONG!')
}
}
function game () {
    console.log('GAME START')
    let winCounter = 0
    for (let i =0; i < 5; i++){
    console.log('Round', i+1)
    //console.log('Initializing playRound')
    if (playRound () == true){winCounter++}    
    //console.log('Completed playRound')    
    }
    console.log('You won', winCounter, 'round(s)!')

}

game();
