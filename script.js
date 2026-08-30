// Randomly returns a string value: “rock”, “paper” or “scissors”
function getComputerChoice(){
    let rand = Math.floor((Math.random() * 3));
    let pick;
    if (rand === 0) pick = "rock";
    else if (rand === 1) pick = "paper";
    else pick = "scissors";
    return pick;
}

// Takes the user choice and returns it
function getHumanChoice(){
    let humanPick = prompt("Your move: ", "rock, paper, or scissors");
    return humanPick;
}


getComputerChoice();
getHumanChoice();
