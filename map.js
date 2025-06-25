const numbers = [1,2,3,4,5]

const sqaures = numbers.map(square)
console.log(sqaures)

function square(element){
    return Math.pow(element, 2)
}