let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let pick = ["rock", "paper", "scissors"];
    let randomChoice = pick[Math.floor(Math.random() * pick.length)];    
    return randomChoice;
}

function getHumanChoice(){
    let validChoice = true;
    
    while(validChoice = true){
        let choice = prompt("Please enter your choice:", "Rock, paper or scissors").toLowerCase();
        if(choice == "rock" || choice == "paper" || choice == "scissors"){
            alert("Thanks!");
            return choice;
        }else{
            validChoice = true;
        }
    }
}

function playRound(humanChoice, computerChoice){
    let gameCount = 1;
    
    console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}.`);

    while(gameCount <= 5){
        if(humanChoice == computerChoice){
            console.log("It's a tie!");
        }
        else if(humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You won this round!");
        }else if(humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You won this round!");
        }else if(humanChoice == "paper" && computerChoice == "rock"){
            console.log("You won this round!");
        }else{
            console.log("You lost this round!");
        }
        ++gameCount;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


