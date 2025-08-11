// Spread - ...
// rest - (...)

function openFoods(...foods){
    console.log(...foods)
}

function getFoods(...foods){
    return foods
}
const food1 = 'apple-pie'
const food2 = 'burger'
const food3 = 'turkey'
const food4 = 'chips'

// openFoods(food1, food2, food3, food4)

const foods = getFoods(food1, food2, food3, food4)
console.log(foods)