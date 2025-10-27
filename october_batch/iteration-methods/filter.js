const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function oddNum(element) {
  return element % 2 === 0;
}

console.log(numbers.filter(oddNum));
