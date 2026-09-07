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