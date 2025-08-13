const age = 17;

// if (age >= 19) {
//   console.log("you can vote");
// } else {
//   console.log("You cannot vote");
// }

if (age >= 60) {
  console.log("You should be retiring");
} else if (age >= 18) {
  console.log("You are a working class");
} else if (age == 0) {
  console.log("You were just born today");
} else {
  console.log("You are underage");
}
