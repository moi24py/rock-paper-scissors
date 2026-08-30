// Randomly returns a string value: “rock”, “paper” or “scissors”
function getComputerChoice(){
    let rand = Math.floor((Math.random() * 3));
    let pick;
    if (rand === 0) pick = "rock";
    else if (rand === 1) pick = "paper";
    else pick = "scissors";
    return pick;
}

getComputerChoice();
