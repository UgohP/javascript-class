const counter = document.getElementById("counter");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
let count = 0;

increase.onclick = function () {
  count++;
  counter.textContent = count;
};

reset.onclick = function () {
  count = 0;
  counter.textContent = count;
};
