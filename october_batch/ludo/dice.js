const diceA = document.getElementById('dice1');
const diceB = document.getElementById('dice2');
const roll = document.getElementById('roll');

roll.onclick = function(){
   const num1 = Math.floor(Math.random()*6)+1;
   const num2 = Math.floor(Math.random()*6)+1;
   diceA.textContent = `${num1}`;
   diceB.textContent = `${num2}`;
}