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

function addNumber4(num1, num2) {
  console.log(num1 + num2);
}

const addNumber5 = function (num1, num2) {
  return num1 + num2;
};

//Arrowfunctions
const addArrowFunction = (num1, num2) => {
  return num1 + num2;
};

console.log(addArrowFunction(40, 40));
console.log(addNumber5(20, 20));
addNumber1(2, 5);
addNumber4(7, 7);
console.log(addNumber2(10, 5));
console.log(addNumber3(10, 10));
