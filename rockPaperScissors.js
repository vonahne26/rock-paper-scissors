function computerPlay() {
    let randomNum = Math.floor((Math.random()*3)+1);
    switch (randomNum) {
        case 1:
            return 'rock';
            break;
        case 2: 
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break
    }
}

function singleRound(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    
    let computerChoice = computerPlay();

    if (playerChoice == 'rock' && computerChoice == 'scissors'){
        playerScore = playerScore + 1;
        return "You Win! Rock beats Scissors!"
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore = playerScore + 1;
        return "You Win! Scissors beats Paper!"
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore = playerScore + 1;
        return "You Win! Paper beats Rock!"
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        computerScore = computerScore + 1;
        return "You Lose. Scissors beats Paper."
    }
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        computerScore = computerScore + 1;
        return "You Lose. Paper beats Rock."
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        computerScore = computerScore + 1;
        return "You Lose. Rock beats Scissors."
    }
    else if (playerChoice == computerChoice) {
        tied = tied + 1;
        return "It is a tie"
    }
        else{
        return "You Lose. You have to choose rock, paper, or scissors to win."
    }
};
let playerScore = 0;
let computerScore =  0;
let tied = 0;

const roundDiv = document.getElementById('singleRound');
const roundP = document.createElement('p');
roundP.textContent = 'Press a button to start.';
roundDiv.appendChild(roundP);

const gameDiv = document.getElementById('runningScore');
const gameP = document.createElement('p');
gameP.textContent = `Player Score ${playerScore}. Computer Score ${computerScore}. Tied Score ${tied}.`;
gameDiv.appendChild(gameP);

let btn = document.querySelectorAll('button');
    btn.forEach((button) => {
        button.addEventListener('click', () => {
            roundP.textContent = (singleRound(button.id));
            roundDiv.appendChild(roundP);
            gameDiv.appendChild(gameP);
            gameP.textContent = `Player Score ${playerScore}. Computer Score ${computerScore}. Tied Score ${tied}.`;
            
            if(playerScore === 5){
                gameP.textContent = `Player Score ${playerScore}. Computer Score ${computerScore}. Tied Score ${tied}.
                \n You Won the game!`;
                playerScore = 0;
                computerScore =  0;
                tied = 0;
            }
            if(computerScore === 5){
                gameP.textContent = `Player Score ${playerScore}. Computer Score ${computerScore}. Tied Score ${tied}.
                 The computer Won the game!`;
                playerScore = 0;
                computerScore =  0;
                tied = 0;
            }
        }
        );
    }    
);
