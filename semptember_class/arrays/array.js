// let arrayOfStrings = ["John", "Doe", "Esther", "Osaretin"];
// let arrayOfNumbers = [20, 10.5, 40];
// let arrayOfDiffVarTypes = [
//   "kiki",
//   true,
//   NaN,
//   20.4,
//   Math.floor(40.56),
//   Math.random(),
// ];

// console.log(arrayOfStrings);
// console.log(arrayOfNumbers);
// console.log(arrayOfDiffVarTypes);

let fruits = ["orange", "apple", "pineapple", "watermelon"];
console.log(fruits[1]); //prints the nth index of the array
console.log(fruits.length); //prints the length of the array
fruits.push("carrot"); // adds carrot to the ending of the array
fruits.unshift("Guava"); //adds Gwava to the beginning of the array
const pop = fruits.pop(); //removes the last item of the array
fruits.shift(); //removes the first value of the array
console.log(fruits.indexOf("pineapple")); //gets the index of the pineapple in the array
