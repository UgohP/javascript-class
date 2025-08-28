class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName(){
    console.log(`${this.firstName} ${this.lastName}`)
  }

}

const person1 = new Person("John", "Doe", 16);
person1.fullName()
const person2 = new Person("Mary", "Anene", 40);
person2.fullName()
