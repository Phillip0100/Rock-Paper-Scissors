
function getComputerChoice(){
    let pick = ["rock", "paper", "scissors"];
    let randomChoice = pick[Math.floor(Math.random() * pick.length)];    
    return randomChoice;
}
