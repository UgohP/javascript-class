const numbers = [1, 2, 3, 4, 5];

function sqaure(element) {
  return Math.pow(element, 2);
}
const sqaures = numbers.map(sqaure);
console.log(sqaures);

console.log(numbers.map((value) => value ** 2));
