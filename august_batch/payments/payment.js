const subscribe = document.getElementById("subscribe");
const verve = document.getElementById("verve");
const master = document.getElementById("master");
const visa = document.getElementById("visa");

document.getElementById("submitBtn").onclick = function () {
  if (subscribe.checked) {
    document.getElementById(
      "subscribeTxt"
    ).textContent = `You have subcribed successfully`;
  } else {
    document.getElementById(
      "subscribeTxt"
    ).textContent = `You have not subcribed`;
  }
};
