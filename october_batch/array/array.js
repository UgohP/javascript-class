let fruits = ["pineapple", "banana", "mango", "watermelon"];
fruits.push("Orange"); //adds an item to the last of the list
fruits.unshift("apple"); //adds an itemt to the start of the list
fruits.shift(); //removes the first item from the list
fruits.pop(); //removes the last item from the list
console.log(fruits.length);
console.log(fruits[4])
console.log(fruits);

export default fruits