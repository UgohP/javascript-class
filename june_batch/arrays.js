let fruits = ["apples", "coconut", "pawpaw", "banana" ]

//looping through an array
for(let i = 0; i < fruits.length; i++){
    console.log(i, fruits[i])
}

console.log("\n reverse")
for(let i = fruits.length - 1; i >= 0; i--){
    console.log(i, fruits[i])
}

console.log("\n advance way")
for(let fruit of fruits){
    console.log(fruit)
}

// console.log(fruits.indexOf("apples"))
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits.sort().reverse())
// fruits.push("pineapple")
// console.log("Added Pineapple")
// console.log(fruits)
// fruits.push("Paschal")
// console.log("Added Paschal")
// console.log(fruits)
// fruits[4] = "Oranges"
// console.log(fruits)
// fruits.pop()
// console.log("Remove Paschal")
// console.log(fruits)
// console.log(fruits.length)

// fruits.unshift('Guava')
// console.log(fruits)
// fruits.shift()
// console.log(fruits)
