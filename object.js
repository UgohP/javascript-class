const person = {
    firstName: "John",
    lastName: "Doe",
    age: 15,
    sayHi: function () {
        console.log(`Hi, ${this.firstName} ${this.lastName}`)
    }
}

person.sayHi()
console.log(person.firstName)