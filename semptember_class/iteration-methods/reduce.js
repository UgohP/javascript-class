const numbers = [1, 2, 3, 4, 5];

function sum(accumulator, element){
    return accumulator + element
}

console.log(numbers.reduce(sum))