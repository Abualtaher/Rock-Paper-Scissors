const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDiplay");
const resultDiplay = document.querySelector("#resultDisplay");

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
}
