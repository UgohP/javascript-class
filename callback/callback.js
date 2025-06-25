sayHi(sayWelcome)
// sayWelcome()

function sayHi(callback){
     console.log("hi")
     callback()
}

function sayWelcome(){
    console.log("Welcome to my website")
}

sum(displayPage, 1, 4)
function sum(callback, x, y){
    let result = x + y
    callback(result)
}

function displayPage(result){
    document.getElementById('h1').textContent = `The sum is: ${result}`
}