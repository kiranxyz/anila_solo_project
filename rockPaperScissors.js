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

const computerMve = computerMove[getRandomInt(3)];
console.log(`🧑 You chose: ${playerMove}`);
console.log(`💻 Computer chose: ${computerMve}`);

switch (playerMove[0] != null || "") {
  case (playerMove[0] === "rock" && computerMve === "rock") == true:
    console.log("🤝It's a draw");
    break;
  case (playerMove[0] === "rock" && computerMve === "paper") == true:
    console.log("🎉You win!");
    break;
  case (playerMove[0] === "rock" && computerMve === "scissors") == true:
    console.log("🎉You win!");
    break;
  case (playerMove[0] === "paper" && computerMve === "scissors") == true:
    console.log("😢You lose!");
    break;
  case (playerMove[0] === "paper" && computerMve === "rock") == true:
    console.log("😢You lose!");
    break;
  case (playerMove[0] === "paper" && computerMve === "paper") == true:
    console.log("🤝It's a draw");
    break;
  case (playerMove[0] === "scissors" && computerMve === "rock") == true:
    console.log("😢You lose!");
    break;
  case (playerMove[0] === "scissors" && computerMve === "paper") == true:
    console.log("🎉You win!");
    break;
  case (playerMove[0] === "scissors" && computerMve === "scissors") == true:
    console.log("🤝It's a draw");
    break;
  default:
    console.log("❌ Please enter your move: ");
}
