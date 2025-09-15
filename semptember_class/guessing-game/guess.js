let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * maxNum) + minNum;
let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("Please enter a real Number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a number within the range");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("TOO LOW!!! Please try again!!!");
    } else if (guess > answer) {
      window.alert("TOO HIGH!!! Please try again!!!");
    } else {
      window.alert(`CORRECT!!!. It took you ${attempts} attempts`);
      running = false;
    }
  }
}
