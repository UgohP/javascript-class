const person = {
  firstName: "John",
  lastName: "Doe",
  age: 16,
  sayHi: function () {
    console.log(`Hi, ${this.firstName} ${this.lastName}`);
  },
};

person.sayHi()
console.log(person.firstName);
