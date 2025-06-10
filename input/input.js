let welcomeText = document.getElementById("welcometxt");
let input = document.getElementById("input");
let enterButton = document.getElementById("enterBtn");
let username;

enterButton.onclick = function () {
  username = input.value;
  welcomeText.textContent = `W!elcome ${username}`;
};
