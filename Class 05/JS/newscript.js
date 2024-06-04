// 3/6/2024

//nested if statements

let age = +prompt("Your age?");

if (age >= 18) {
  var weight = +prompt("Your weight");

  if (weight <= 70) {
    alert("You're a smart guy!");
  } else {
    alert("You're a fat guy");
  }
} else {
  alert("You're a boy");
}

var userID = prompt("Enter user name");
var password = +prompt("Your Password");

if (userID == "Ali" && password == 1122) {
  alert("User Logged in");
} else {
  alert("User name and password is incorrect");
}


