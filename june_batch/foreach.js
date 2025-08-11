const numbers = [1,2,3,4,5]
numbers.forEach(double3)
numbers.forEach(display)

numbers.forEach(double1)
numbers.forEach(double2)

function display(element){
    console.log(element)
}

function double1(element){
    console.log(Math.pow(element, 2))
}

function double2(element){
    console.log(element ** 2)
}

function double3(element, index, array){
    array[index] = element ** 2
}