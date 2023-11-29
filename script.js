
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

function playRound(playerSelection, computerSelection){
    let result
    // case user : Rock
    if(playerSelection === "rock" && computerSelection === "Rock"){
        result = "Draw!"
    }else if(playerSelection === "rock" && computerSelection === "Paper"){
        result = "You Lose! Paper beats Rock"
    }else if(playerSelection === "rock" && computerSelection === "Scissors"){
        result = "You Win! Rock beats Scissors"
    }
    // case user : Paper
    else if(playerSelection === "paper" && computerSelection === "Rock"){
        result = "You Win! Paper beats Rock"
    }else if(playerSelection === "paper" && computerSelection === "Paper"){
        result = "Draw"
    }else if(playerSelection === "paper" && computerSelection === "Scissors"){
        result = "You Lose! Scissors beats Paper"
    }
    // case user : Scissors
    else if(playerSelection === "scissors" && computerSelection === "Rock"){
        result = "You Lose! Rock beats Scissors"
    }else if(playerSelection === "scissors" && computerSelection === "Paper"){
        result = "You Win! Scissors beats Paper"
    }else if(playerSelection === "scissors" && computerSelection === "Scissors"){
        result = "Draw"
    }
    return result
}

function game(){
    for(let i = 1 ; i <= 5; i++){
        const userEnter = prompt("Enter You Rock, Paper, Scissors : ",);
        const playerSelection = userEnter.toLowerCase();
        const computerSelection = getComputerchoice();
        console.log(playRound(playerSelection, computerSelection));
        let score = playRound(playerSelection, computerSelection).charAt(4);

        if(score === "W"){
            counts = counts + 1
        }else if(score === "L"){
            counts = counts - 1
        };
        }
    if(counts > 0){
        console.log("You Win!");
    }else if(counts < 0){
        console.log("You Lose!");
    }else{
        console.log("Draw!");
    }
    };

let counts = 0;
game();


// how to upgrade when I enter someting with typo then alert 'try again'