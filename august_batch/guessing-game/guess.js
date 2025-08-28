let min = 1;
let max = 100;
let answer = Math.floor(Math.random() * (max - min + 1) + min);
let attempt = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${min} and ${max}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < min || guess > max) {
    window.alert("Please, enter a number within the range");
  } else {
    attempt++;
    if (guess < answer) {
      window.alert("TOO LOW!!! TRY AGAIN WEREY!!!");
    } else if (guess > answer) {
      window.alert("TOO HIGH!!! TRY AGAIN WEREY!!!");
    } else {
      window.alert(
        `CORRECT, The answer is ${guess}, Werey, It took you ${attempt} attempts`
      );
      running = false
    }
  }
}
