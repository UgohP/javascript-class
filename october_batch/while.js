let isLoggedIn = false;
let username;
let password;

while (!isLoggedIn) {
  username = window.prompt("Enter username");
  password = window.prompt("Enter password");

  if (username === "John" && password === "12345") {
    isLoggedIn = true;
  } else {
    window.alert("Wrong Credentials");
  }
}
