function addition1(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}

addition1(10, 20);

function addition2(num1, num2) {
  const result = num1 + num2;
  return result;
}

console.log(addition2(20, 40));

function addition3(num1, num2) {
  return num1 + num2;
}

console.log(addition3(100, 40));
 
function addition4(num1, num2){
  const result = num1 + num2
  console.log(`${num1} + ${num2} = ${result}`)
}

addition4(30, 20);