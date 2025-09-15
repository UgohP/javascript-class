let isLoggedIn = false;
let username;
let password;

while (!isLoggedIn) {
  username = window.prompt("Enter username");
  password = window.prompt("Enter Password");
  if (username === "pasky" && password === "1234") {
    console.log("LoggedIn");
    isLoggedIn = True;
  } else {
    console.log("Wrong Credentials");
  }
}
