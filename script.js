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
