const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNum(value) {
  return value % 2 === 0;
}

console.log(numbers.filter(evenNum))