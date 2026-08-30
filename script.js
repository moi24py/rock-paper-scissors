let humanScore = 0;
let computerScore = 0;

// Randomly returns a string value: “rock”, “paper” or “scissors”
function getComputerChoice(){
    let rand = Math.floor((Math.random() * 3));
    let pick;
    if (rand === 0) pick = "rock";
    else if (rand === 1) pick = "paper";
    else pick = "scissors";
    console.log(pick);
    return pick;
}

// Takes the user choice and returns it
function getHumanChoice(){
    let humanPick = prompt("Your move: ", "rock, paper, or scissors");
    return humanPick;
}

// Play a single round
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) console.log ("It's a tie!");
    if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        console.log ("You win! Rock beats scissors.");
        humanScore++;
    }
    if ((humanChoice === "rock") && (computerChoice === "paper")) {
        console.log ("You lose! Paper beats rock.");
        computerScore++;
    }
    if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        console.log ("You lose! Scissors beats paper.");
        computerScore++;
    }
    if ((humanChoice === "paper") && (computerChoice === "rock")) {
        console.log ("You win! Paper beats rock.");
        humanScore++;
    }
    if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        console.log ("You lose! Rock beats scissors.");
        computerScore++;
    }
    if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        console.log ("You win! Scissors beats paper.");
        humanScore++;
    }
}

// Plays a game of 5 rounds and consoles the winner
function playGame(){
    for(let round = 0; round < 5; round++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    let winner = humanScore >= computerScore ? `You win the game! ${humanScore} vs ${computerScore}` : `You lose the game! ${humanScore} vs ${computerScore}`;
    console.log(winner); 
}

playGame();