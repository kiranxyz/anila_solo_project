/*Rock Paper Scissors
Description: Implement a basic Rock Paper Scissors game.
Requirements:
The program should take the player’s move as an input from process.argv.
The program should randomly generate a move for the computer.
Determine the winner based on the rules of Rock Paper Scissors.
Output the result (win, lose, or draw) to the console.
Example: node rockPaperScissors.js rock # Output: You chose rock. Computer chose scissors. You win!*/

const playerMove = process.argv.slice(2);
let computerMove = ["rock", "paper", "scissors"];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/*if (playerMove === "" && computerMove === "") {
  console.log("win");
  return;
} else if (playerMove === "" && computerMove === "") {
  console.log("lose");
  return;
} else if (playerMove === "" && computerMove === "") {
  console.log("draw");
  return;
} else {
  console.log("Please enter a move: ");
  return;
}*/

switch (playerMove[0] != null || "") {
  case (playerMove[0] === "rock" && computerMove[getRandomInt(3)] === "rock") ==
    true:
    console.log("draw");
    break;
  case (playerMove[0] === "rock" &&
    computerMove[getRandomInt(3)] === "paper") == true:
    console.log("win");
    break;
  case (playerMove[0] === "rock" &&
    computerMove[getRandomInt(3)] === "scissors") == true:
    console.log("win");
    break;
  case (playerMove[0] === "paper" &&
    computerMove[getRandomInt(3)] === "scissors") == true:
    console.log("lose");
    break;
  case (playerMove[0] === "paper" &&
    computerMove[getRandomInt(3)] === "rock") == true:
    console.log("lose");
    break;
  case (playerMove[0] === "paper" &&
    computerMove[getRandomInt(3)] === "paper") == true:
    console.log("draw");
    break;
  case (playerMove[0] === "scissors" &&
    computerMove[getRandomInt(3)] === "rock") == true:
    console.log("lose");
    break;
  case (playerMove[0] === "scissors" &&
    computerMove[getRandomInt(3)] === "paper") == true:
    console.log("win");
    break;
  case (playerMove[0] === "scissors" &&
    computerMove[getRandomInt(3)] === "scissors") == true:
    console.log("draw");
    break;
  default:
    console.log("Please enter your move: ");
}
