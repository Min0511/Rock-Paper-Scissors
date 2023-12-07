const choiceBtn = document.querySelectorAll(".choiceBtn");
const output = document.querySelector(".output");
let userScore = 0;
let computerScore = 0;

function getComputerchoice(){
    let selectedNumber = Math.floor(Math.random()*10);
    let RPS;
    while(selectedNumber === 0){
        selectedNumber = Math.floor(Math.random()*10);
        if(selectedNumber !== 0) break;
    }
    if(selectedNumber >= 1 && selectedNumber <= 3){
        RPS = "Rock"
    }else if(selectedNumber >= 4 && selectedNumber <= 6){
        RPS = "Paper"
    }else if(selectedNumber >= 7 && selectedNumber <= 9){
        RPS = "Scissors"
    };
    return RPS;
}

choiceBtn.forEach(button => button.addEventListener("click",()=>{
    let playerSelection = button.textContent.toLowerCase();
    let computerSelection = getComputerchoice();
    playRound(playerSelection, computerSelection);
    finalResult();
}));

function playRound(playerSelection, computerSelection){
    // case user : Rock
    if(playerSelection === "rock" && computerSelection === "Rock"){
        output.textContent = "Draw!"
    }else if(playerSelection === "rock" && computerSelection === "Paper"){
        output.textContent = "You Lose! Paper beats Rock"
    }else if(playerSelection === "rock" && computerSelection === "Scissors"){
        output.textContent = "You Win! Rock beats Scissors"
    }
    // case user : Paper
    else if(playerSelection === "paper" && computerSelection === "Rock"){
        output.textContent = "You Win! Paper beats Rock"
    }else if(playerSelection === "paper" && computerSelection === "Paper"){
        output.textContent = "Draw!"
    }else if(playerSelection === "paper" && computerSelection === "Scissors"){
        output.textContent = "You Lose! Scissors beats Paper"
    }
    // case user : Scissors
    else if(playerSelection === "scissors" && computerSelection === "Rock"){
        output.textContent = "You Lose! Rock beats Scissors"
    }else if(playerSelection === "scissors" && computerSelection === "Paper"){
        output.textContent = "You Win! Scissors beats Paper"
    }else if(playerSelection === "scissors" && computerSelection === "Scissors"){
        output.textContent = "Draw!"
    }
}

function finalResult(){
    let score = output.textContent.charAt(4);
    if(score === "W"){
        userScore += 1
        console.log("User Score" + userScore);
    }else if(score === "L"){
        computerScore += 1
        console.log("Computer score : " + computerScore)
    };
    if(userScore === 5){
        alert("YOU WIN!")
    }else if(computerScore === 5){
        alert("COMPUTER WIN!")
    }
}