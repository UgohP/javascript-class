const numbers = [1, 2, 3, 4, 5];

console.log(numbers.reduce(sum))

function sum(accumulator, element){
    return accumulator + element 
}
