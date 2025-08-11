document.getElementById("submit").onclick = function () {
  let username = document.getElementById("userInput").value;
  document.getElementById("myh1").textContent = `Welcome ${username}`;
};
