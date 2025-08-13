let min = 1;
let max = 6;

document.getElementById("roll").onclick = function () {
  const diceA = Math.floor(Math.random() * max) + min;
  document.getElementById("dice1").textContent = `Dice1: ${diceA}`;

  const diceB = Math.floor(Math.random() * max) + min;
  document.getElementById("dice2").textContent = `Dice1: ${diceB}`;
};
