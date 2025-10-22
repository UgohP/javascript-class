const numbers = [1, 2, 3, 4, 5];

function display(element) {
  console.log(element);
}

function power(element) {
  console.log(element * 2);
}

numbers.forEach(power);
