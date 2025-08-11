let calculate = document.getElementById("calculate");
let circumference = document.getElementById("circumference");
let radius;
let answer;
const PI = 3.14;

calculate.onclick = function () {
  radius = document.getElementById("input").value;
  radius = Number(radius);
  answer = 2 * PI * radius;
  circumference.textContent = `Circumference: ${answer}cm `;
};
