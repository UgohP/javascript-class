// spread operator - ...
// rest operator - (...)

// rest operator
const food1 = "rice";
const food2 = "beans";
const food3 = "sushi";
const food4 = "dodo";

/**
 * ruturns an array of foods
 * @param  {...any} foods
 * @returns an array
 */
function getFoods(...foods) {
  return foods;
}

const foods = getFoods(food1, food2, food3, food4);

// console.log(foods);

//spread operator

const snacks = ["shawarma", "burger", "pizza", "donut"];
const drinks = ["juice", "cola", "malt", "water"];
const junks = [...snacks, ...drinks, ...foods, "egg", "code"];
console.log(junks);
