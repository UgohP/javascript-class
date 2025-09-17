const food1 = "rice";
const food2 = "beans";
const food3 = "sushi";
const food4 = "eba";

/**
 * rest operator (...)
 * @param  {...any} foods 
 * @returns an array
 */
function getsFoods(...foods) {
  return foods;
}

const foods = getsFoods(food1, food2, food3, food4);
console.log(foods)