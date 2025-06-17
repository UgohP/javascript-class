let username = "pasky,ugoh"

// username = username.toUpperCase()
// username = username.trim()
// username = username.slice(4) + username.slice(3,4) + username.slice(2,3) + username.slice(1,2) + username.slice(0,1)
username = username.replaceAll(',', '-')
console.log(username)