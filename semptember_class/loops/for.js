const fruits = ["banana", "apples", "carrot", "pineappples"];

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

console.log("\n reverse");

//reverse
for (let i = fruits.length - 1; i >= 1; i--) {
  console.log(i, fruits[i]);
}
