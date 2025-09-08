/**
 * Adds two number
 * @param {Number} num1
 * @param {Number} num2
 */
function addNumber1(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}

function addNumber2(num1, num2) {
  const result = num1 + num2;
  return result;
}

function addNumber3(num1, num2) {
  return num1 + num2;
}

addNumber1(2, 5);
console.log(addNumber2(10, 5));
console.log(addNumber3(10, 10));