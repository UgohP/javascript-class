const label = document.getElementById("label");
const increase = document.getElementById("increase-btn");
const reset = document.getElementById("reset-btn");
const decrease = document.getElementById("decrease-btn");
let count = 0;

increase.onclick = function () {
  count++;
  label.textContent = `${count}`;
};

reset.onclick = function () {
  count = 0;
  label.textContent = `${count}`;
};
