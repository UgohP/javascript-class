// let fullname = 'John'
// let age = 10
// let enrolled = true

// console.log(`Name: ${fullname}`)
// console.log(`Age: ${age} years old`)
// console.log(`isStudent: ${enrolled}`)

// My name is Ugoh Paschal Obiomachukwu and I am a software engineer

const surname = "Ugoh";
const firstname = "Paschal";
const middlename = "Obiomachukwu";
const career = "Software Engineer";

console.log(
  `My name is ${surname} ${firstname} ${middlename} and I am a ${career}`
);

document.getElementById("surname").textContent = `Surname: ${surname}`;
document.getElementById("firstname").textContent = `Firstname: ${firstname}`;
document.getElementById("middlename").textContent = `Middlename: ${middlename}`;
document.getElementById("career").textContent = `Career: ${career}`;
document.getElementById(
  "paragraph"
).textContent = `My name is ${surname} ${firstname} ${middlename} and I am a ${career}`;
