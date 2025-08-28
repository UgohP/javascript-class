const numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19];
const reversed = [];

for (let i = 0; i < numbers.length; i++) {
  console.log(`${i}: ${numbers[i]}`);
}

console.log(numbers.length)

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(`${i}: ${numbers[i]}`);
  reversed.push(numbers[i]);
}

console.log(reversed);



//FOR EACH
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function double(element) {
  console.log(element ** 2);
}

numbers2.forEach(double)

numbers2.forEach(element => console.log(element ** 2))