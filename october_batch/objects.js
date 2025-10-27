class User {
  constructor(firstname, lastname, age, email) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
  }
}

const user1 = new User("John", "Doe");
console.log(user1);
