function rollDice() {
  const noOfDice = document.getElementById("noOfDice").value;
  const diceResults = document.getElementById("diceResults");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (i = 0; i < noOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice-images/${value}.png" alt=Dice ${value}>`);
  }
  diceResults.textContent = `Dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}
