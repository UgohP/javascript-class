const submit = document.getElementById("submit");
const input = document.getElementById("age");
const text = document.getElementById("value");

submit.onclick = function () {
  let age = input.value;
  age = Number(age);
  if (age >= 70) {
    text.textContent = `You are ${age} years old. You should be retiring you old hag.`;
  } else if (age >= 17) {
    text.textContent = `You are ${age} years old. You should be working.`;
  } else if (age < 16) {
    text.textContent = `You are ${age} years old. You should be in school smallie.`;
  } else if (age === 0) {
    text.textContent = `You are ${age} year old. Them just dey born you.`;
  } else {
    text.textContent = `You are ${age} year old. Omo, I no get waitin I wan tell you.`;
  }
};

// const age = 80;

// if (age >= 70) {
//   console.log("You should be retiring");
// } else if (age >= 17) {
//   console.log("You are in working class");
// } else if (age < 16) {
//   console.log("You should be in school");
// } else {
//   console.log("lol");
// }

// if (age >= 16) {
//   console.log("You are in working class");
// } else if (age >= 70) {
//   console.log("You should be retiring");
// } else if (age < 16) {
//   console.log("You should be in school");
// } else {
//   console.log("lol");
// }
