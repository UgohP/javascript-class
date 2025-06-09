let counterValue = document.getElementById("counter-value");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let count = 0;

increase.onclick = function () {
  count++;
  counterValue.textContent = count;
};

decrease.onclick = function () {
  count--;
  counterValue.textContent = count;
};

reset.onclick = function () {
  count = 0;
  counterValue.textContent = count;
};