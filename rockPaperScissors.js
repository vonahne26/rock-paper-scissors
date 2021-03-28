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
        return "You Win! Rock beats Scissors!"
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return "You Win! Scissors beats Paper!"
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return "You Win! Paper beats Rock!"
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        return "You Lose. Scissors beats Paper."
    }
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        return "You Lose. Paper beats Rock."
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        return "You Lose. Rock beats Scissors."
    }
    else if (playerChoice == computerChoice) {
        return "It is a tie"
    }
        else{
        return "You Lose. You have to choose rock, paper, or scissors to win."
    }
};

const roundDiv = document.getElementById('singleRound');
const roundP = document.createElement('p');

const gameDiv = document.getElementById('runningScore');
const gameP = document.createElement('p');

for(i=0; i<5; i++){
    let btn = document.querySelectorAll('button');
        btn.forEach((button) => {
            button.addEventListener('click', () => {
                roundP.textContent = (singleRound(button.id));
                roundDiv.appendChild(roundP);
            }
            );
        }    
    );
};