function sayHi() {
  console.log("Hi");
}

sayHi();

const hello = function () {
  console.log("Hello");
};

hello();

setTimeout(function () {
  console.log("hello world");
}, 5000);

const numbers = [1, 2, 3, 4, 5];

const sqaures = numbers.map(function (element) {
  return element ** 2;
});

console.log(sqaures);
