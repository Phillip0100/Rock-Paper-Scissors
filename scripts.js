
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


