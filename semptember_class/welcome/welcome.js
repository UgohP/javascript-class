const welcome = document.getElementById("welcome");

function submit() {
  const name = document.getElementById("username").value;
  welcome.textContent = `Welcome ${name}`;
}