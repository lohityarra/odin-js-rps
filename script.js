let random = ["rock", "paper", "scissors"];

function computerPlay (){
    let value = random[Math.floor(Math.random()*3)];
    return value

}

function userPlay(){
    let input_value = prompt('Enter your value:').toLowerCase();
    return input_value

}
function game(playerSelection,computerSelection){
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Draw!";
        } else if (computerSelection === "paper") {
            return "Computer wins!";
        } else {
            return "User wins!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "User wins!";
        } else if (computerSelection === "paper") {
            return "Draw!";
        } else {
            return "Computer wins!";
        }
    } else {
        if (computerSelection === "rock") {
            return "Computer wins!";
        } else if (computerSelection === "paper") {
            return "User wins!";
        } else {
            return "Draw!";
        }
    }
}

    


console.log(userPlay());