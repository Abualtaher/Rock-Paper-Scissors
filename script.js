const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDiplay = document.querySelector("#resultDisplay");

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It is a tie!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You win!" : "You lose!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You win!" : "You lose!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You win!" : "You lose!";
        break;
    }
  }
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDiplay.textContent = result;

  resultDiplay.classList.remove("greenText", "redText");

  switch (result) {
    case "You win!":
      resultDiplay.classList.add("greenText");
      break;
    case "You lose!":
      resultDiplay.classList.add("redText");
      break;
  }
}
