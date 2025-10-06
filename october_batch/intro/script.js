const welcome = document.getElementById("welcome");
const input = document.getElementById("input");
const submit = document.getElementById("submit");

submit.onclick = function () {
  const name = input.value;
  welcome.textContent = `Welcome ${name}`;
};
