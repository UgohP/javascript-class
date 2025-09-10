const sayHi = function (name, age) {
  console.log(`Hi, my name is ${name} and I am ${age} years old`);
};

sayHi("John", 14);
sayHi("Doe", 10);

const sayHello = (name, age) => {
  return `Hello, my name is ${name} and I am ${age} years old`;
};

console.log(sayHello(16, "John"))
