const numbers = [1, 2, 3, 4, 5];

function square(value) {
  return value + 2;
}

const squaredNums = numbers.map(square);
console.log(squaredNums);

console.log(numbers.map(value => value + 2))