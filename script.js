// Debugging and Clean Code Homework - Fixed Rock Paper Scissors Program

let i = 1;
let playerWins = 0;
let computerWins = 0;
let ties = 0;

function randomFrom(array) {
    return array[(Math.floor(Math.random() * 3))];
}

function checkInput(input, computerChoice) {
    if (input === "quit") {
        return false;
    } else if ((computerChoice === "rock") && (input === "scissors")) {
        alert("Computer wins!");
        computerWins++;
        console.log('Match: ' + i + ' Scissors vs Rock, Computer Wins');
        return true;
    } else if ((computerChoice === "scissors") && (input === "paper")) {
        alert("Computer wins!");
        computerWins++;
        console.log('Match: ' + i + ' Paper vs Scissors, Computer Wins');
        return true;
    } else if ((computerChoice === "paper") && (input === "rock")) {
        alert("Computer wins!");
        computerWins++;
        console.log('Match: ' + i + ' Rock vs Paper, Computer Wins');
        return true;
    } else if ((computerChoice === "paper") && (input === "scissors")) {
        alert("Player 1 wins!");
        playerWins++;
        console.log('Match: ' + i + ' Scissors vs Paper, Player 1 Wins');
        return true;
    } else if ((computerChoice === "scissors") && (input === "rock")) {
        alert("Player 1 wins!");
        playerWins++;
        console.log('Match: ' + i + ' Rock vs Scissors, Player 1 Wins');
        return true;
    } else if ((computerChoice === "rock") && (input === "paper")) {
        alert("Player 1 wins!");
        playerWins++;
        console.log('Match: ' + i + ' Paper vs Rock, Player 1 Wins');
        return true;
    } else if ((computerChoice === "paper") && (input === "paper")) {
        alert("Tie!");
        ties++;
        console.log('Match: ' + i + ' Both Used Paper');
        return true;
    } else if ((computerChoice === "scissors") && (input === "scissors")) {
        alert("Tie!");
        ties++;
        console.log('Match: ' + i + 'Both Used Scissors');
        return true;
    } else if ((computerChoice === "rock") && (input === "rock")) {
        alert("Tie!");
        ties++;
        console.log('Match: ' + i + ' Both Used Rock');
        return true;
    } 
}

function start() {
    gameOver = true;
    computerChoices = ["rock", "paper", "scissors"];
    console.log('Let The Games Begin!');
    while (gameOver === true) {
        let playerInput = '';
        playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
        computerChoice = randomFrom(computerChoices);
        if (computerChoices.includes(playerInput)) {
                gameOver = checkInput(playerInput, computerChoice);
                console.log('[Player Wins: ' + playerWins + '] [Computer Wins: ' + computerWins + '] [Ties: ' + ties + ']');
                i++;
        } else if (playerInput === 'quit') {
            gameOver = checkInput(playerInput, computerChoice);
            if (playerWins > computerWins) {
                console.log('Player 1 beat the Computer: ' + playerWins + ' to ' + computerWins);
            } else if (computerWins > playerWins) {
                console.log('The Computer beat Player 1: ' + computerWins + ' to ' + playerWins);
            } else if (playerWins == computerWins) {
                console.log('Player 1 tied the Computer: ' + playerWins + ' to ' + computerWins);
            }
            i = 1;
            playerWins = 0;
            computerWins = 0;
            ties = 0;
        } else {}
    } 
}

start()  
