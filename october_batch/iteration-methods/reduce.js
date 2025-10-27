const numbers = [1, 2, 3, 4, 5];

function sum(element, accumulator) {
  return element + accumulator;
}

console.log(numbers.reduce(sum));
