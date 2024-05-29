
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


function playGame(){
    let gameCount = 0;
   /* let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();*/
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){

        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}.`);
    
        if(humanChoice == computerChoice){
            console.log("It's a tie!");
        }
        else if(humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You won this round!");
            humanScore++;
        }else if(humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You won this round!");
            humanScore++;
        }else if(humanChoice == "paper" && computerChoice == "rock"){
            console.log("You won this round!");
            humanScore++;
        }else{
            console.log("You lost this round!");
            computerScore++;
        }
        console.log(`The score is ${humanScore} for player, and ${computerScore} for the computer!`)
    
    }

    while(gameCount < 5){
        playRound(getHumanChoice(), getComputerChoice());
        ++gameCount;
    } 
}

playGame();