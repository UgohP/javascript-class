function Person(firstName, lastName, age, favFood){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.favFood = favFood
}

const person1 = new Person("John", "Doe", 40, 'rice')
const person2 = new Person("James", "Alex", 36, 'beans')

console.log(person1)
console.log(person2.firstName)
