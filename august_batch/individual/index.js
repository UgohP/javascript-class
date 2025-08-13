document.getElementById("submit").onclick = function () {
  const username = document.getElementById("username").value;
  const age = document.getElementById("age").value;
  const state = document.getElementById("state").value;
  const gender = document.getElementById("gender").value;
  document.getElementById("value").textContent = `Your username is ${username}, and you are ${age} years old from ${state} and you are a ${gender}`;
};