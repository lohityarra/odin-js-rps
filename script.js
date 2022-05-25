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
            return "It's a Draw!";
        } else if (computerSelection === "paper") {
            return "Computer wins by paper!";
        } else {
            return "User wins on scissors!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "User wins on rock!";
        } else if (computerSelection === "paper") {
            return "It's a Draw!";
        } else {
            return "Computer wins with scissors!";
        }
    } else {
        if (computerSelection === "rock") {
            return "Computer wins with rock!";
        } else if (computerSelection === "paper") {
            return "User wins on paper!";
        } else {
            return "It's a Draw!";
        }
    }
}

    


var player = userPlay();
var computer = computerPlay();
var result = console.log(game(player,computer));
