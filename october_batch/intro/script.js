const welcome = document.getElementById("welcome");
const submit = document.getElementById("submit");
const firstname = document.getElementById("firstname");
const middlename = document.getElementById("middlename");
const lastname = document.getElementById("lastname");

submit.onclick = function () {
  const first = firstname.value;
  const middle = middlename.value;
  const last = lastname.value;
  welcome.textContent = `Welcome My firstname is ${first} and my middlename is ${middle} and my lastname is ${last}`;
};
