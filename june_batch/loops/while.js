let isLoggedIn = false;
let username;
let password;

while (!isLoggedIn) {
  username = window.prompt("Enter username");
  password = window.prompt("Enter Password");

  if (username === "pasky" && password === "123") {
    console.log("LoggedIn");
    isLoggedIn = true;
  } else {
    console.log("Wrong credentials");
  }
}
