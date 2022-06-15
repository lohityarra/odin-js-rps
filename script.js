const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player:0,
    computer : 0
}


//computer play

let random = ["rock", "paper", "scissors"];

function computerPlay (){
    let value = random[Math.floor(Math.random()*3)];
    return value

}

function playRound(playerSelection,computerSelection){
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a Draw!";
        } else if (computerSelection === "paper") {
            return "computer";
        } else {
            return "player";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "player";
        } else if (computerSelection === "paper") {
            return "It's a Draw!";
        } else {
            return "computer";
        }
    } else {
        if (computerSelection === "rock") {
            return "computer";
        } else if (computerSelection === "paper") {
            return "player";
        } else {
            return "It's a Draw!";
        }
    }
}




function showWinner(winner,computerSelection){
    if(winner==='player'){
        //inc player score
        scoreboard.player++;
        //show modal result
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerSelection} fa-10x"></i>
        <p>Computer Chose <strong> ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)} </strong></p>
        `;

    }
    else if(winner === 'computer'){
        //inc computer score
        scoreboard.computer++;
        //show modal result
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerSelection} fa-10x"></i>
        <p>Computer Chose <strong> ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)} </strong></p>
        `;

    }
    else{
        result.innerHTML = `
        <h1 >It's a Draw</h1>
        <i class="fas fa-hand-${computerSelection} fa-10x"></i>
        <p>Computer Chose <strong> ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)} </strong></p>
        `;

    }
    //show score
    score.innerHTML = `
    <p>Player :${scoreboard.player}</p>
    <p>Computer :${scoreboard.computer}</p>

    `;

    modal.style.display = "block";

}
function play(e){
    var user = e.target.id;
    var computer = computerPlay();
    var result = playRound(user,computer);
    showWinner(result, computer);

}

function clearModal(e){
    if(e.target== modal){
        modal.style.display = 'none';

    }
}
//restat game
function restartGame(e){
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player :0</p>
    <p>Computer :0</p>

    `;




}

//event lister
choices.forEach(choice => choice.addEventListener('click',play));
window.addEventListener('click',clearModal);
restart.addEventListener('click', restartGame);







