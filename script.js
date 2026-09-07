// Randomly returns a string value: “rock”, “paper” or “scissors”
function getComputerChoice(){
    let rand = Math.floor((Math.random() * 3));
    let pick;
    if (rand === 0) pick = "rock";
    else if (rand === 1) pick = "paper";
    else pick = "scissors";
    return pick;
}

let humanScore = 0;
let computerScore = 0;

// Current points
const humanPt = document.querySelector("#human-pt");
humanPt.textContent = "0";
const computerPt = document.querySelector("#computer-pt");
computerPt.textContent = "0";

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Show a button with the computer choice
const computerShowBtn = document.createElement("button");
computerShowBtn.setAttribute("style", "padding: 8px; width: 85px; border-radius: 5px; border: 1px solid rgb(250, 80, 38); background-color: rgb(255, 60, 21); text-transform: uppercase; font-weight: 600; text-align: center; box-shadow: 3px 3px rgb(255, 60, 21);");

// Show the winner of the current round
const matchDiv = document.createElement("div");
matchDiv.classList.add(".match-div");
matchDiv.setAttribute("style", "display:flex; align-items: center; justify-content: center; width: 90%; height: 100px; background-color:rgb(1,49,88); margin: 0 auto; text-align: center; text-transform: uppercase; color: rgb(240, 197, 88); font-size: xx-large;");

// Show the winner of the game
const endGame = document.createElement("div");
endGame.classList.add(".end-game-div");
endGame.setAttribute("style", "display:flex; align-items: center; justify-content: center; width: 90%; height: 100px; background-color: rgb(240, 197, 88); margin: 0 auto; text-align: center; text-transform: uppercase; color: rgb(1,49,88); font-size: xx-large;");

const computerShowDiv = document.querySelector(".computer-choice");
const body = document.querySelector("body");

// Play a single round
function playRound(humanChoice, computerChoice){
    computerShowBtn.textContent = computerChoice;
    computerShowDiv.appendChild(computerShowBtn);
    
    if (humanChoice === computerChoice) {
        matchDiv.textContent = "It's a tie!";
    }
    if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        matchDiv.textContent = "You win! Rock beats scissors";
        body.appendChild(matchDiv);
        humanScore++;
        humanPt.textContent = humanScore;
    }
    if ((humanChoice === "rock") && (computerChoice === "paper")) {
        matchDiv.textContent = "You lose! Paper beats rock";
        body.appendChild(matchDiv);
        computerScore++;
        computerPt.textContent = computerScore;
    }
    if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        matchDiv.textContent = "You lose! Scissors beats paper";
        body.appendChild(matchDiv);
        computerScore++;
        computerPt.textContent = computerScore;
    }
    if ((humanChoice === "paper") && (computerChoice === "rock")) {
        matchDiv.textContent = "You win! Paper beats rock";
        body.appendChild(matchDiv);
        humanScore++;
        humanPt.textContent = humanScore;
    }
    if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        matchDiv.textContent = "You lose! Rock beats scissors";
        body.appendChild(matchDiv);
        computerScore++;
        computerPt.textContent = computerScore;
    }
    if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        matchDiv.textContent = "You win! Scissors beats paper";
        body.appendChild(matchDiv);
        humanScore++;
        humanPt.textContent = humanScore;
    }

    // End game
    if (humanScore >= 5 || computerScore >= 5) {
        // Hide rock, paper, scissors buttons and the computer choice button
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        computerShowBtn.style.display = "none";

        // Create end game string
        let endStatus = "";
        if (humanScore >= 5) {
            endStatus = "HUMAN WINS!";
        }
        else {
            endStatus = "COMPUTER WINS!";
        }
        const finish = document.createElement("p");
        finish.textContent = endStatus;
        endGame.appendChild(finish);
        body.appendChild(endGame);

        // New game
        const newGameDiv = document.createElement("div");
        newGameDiv.setAttribute("style", "display: flex; align-items: center; justify-content: center;");
        let newGame = document.createElement("button");
        newGame.textContent = "New Game";
        newGame.setAttribute("style", "background-color: rgb(255, 60, 21); padding: 15px 70px; border: 2px solid rgb(255, 60, 21); border-radius: 20px; text-align:center; text-transform: uppercase; font-size: xx-large; margin: 0 auto; box-shadow: 3px 3px rgb(255, 60, 21); margin-top: 20px;");
        newGameDiv.appendChild(newGame);
        body.appendChild(newGameDiv);
        
        newGame.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            humanPt.textContent = "0";
            computerPt.textContent = "0";
            computerShowDiv.removeChild(computerShowBtn);
            body.removeChild(matchDiv);
            body.removeChild(endGame);
            newGame.remove();
        })
    }
}

function getHumanChoice(){
    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });

    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });

    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}