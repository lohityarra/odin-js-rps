let random = ["rock", "paper", "scissors"];

function computerPlay (){
    let value = random[Math.floor(Math.random()*3)];
    return value

}

function userPlay(){
    let input_value = prompt('Enter your value:').toLowerCase();
    return input_value

}

console.log(userPlay());