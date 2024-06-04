// Concatenating Strings

document.getElementById("concatenate").onclick = function () {
  let message = "Good Day";
  let name = "Umair";
  let banger = "!";

  console.log(message + " " + name + banger);

  let userName = message + " " + name + banger;
  document.getElementById("Output").innerHTML = userName;
};

// Prompts and if statements

document.getElementById("name").onclick = function () {
  let message = "Good Day";
  let firstName = prompt("Enter your first name");
  let lastName = prompt("Enter your last name");
  let banger = "!";

  let fullName = firstName + lastName;

  // console.log(message + " " + fullName + banger );

  let userName = message + " " + fullName + banger;

  document.getElementById("userName").innerHTML = userName;
};

// Document vs Window

// 2 Methods:

window.onload = function(){
    let message = "Good Day"
    let firstName = prompt("Enter your first name");
    let lastName = prompt("Enter your last name");
    let banger = "!"

    let fullName = firstName+lastName

    let userName = message + " " + fullName + banger;

    document.getElementById("userName").innerHTML = userName;

}

function askName() {
  let message = "Good Day";
  let firstName = prompt("Enter your first name");
  let lastName = prompt("Enter your last name");
  let banger = "!";

  let fullName = firstName + lastName;

  let userName = message + " " + fullName + banger;

  document.getElementById("userName").innerHTML = userName;
}

askName();

/* Assignment Operator : " = "   Equality Operator : " == "
        Identity Operator : " === "        */

var one = "2";
var two = 2;

if (one == two) {
  alert("Your Condition is True.");
}

var three = 30;
var four = 30;

if (three === four) {
  alert("Your Condition is True.");
}

var num1 = 20;
var num2 = 40;

if (num1 != num2) {
  alert("Numbers are not equal.");
}

var num1 = 10;
var num2 = 20;

if(num1<num2){
  alert("Your Condition is True!")
}

var num1 = 80;
var num2 = 60;

if (num1 >= num2) {
  alert("Your Condition is True!");
} else {
  alert("Your Condition is False!");
}

var age = +prompt("Enter your age");
var weight = +prompt("Enter your weight");

if (age >= 18 && weight <= 70) {
  alert("You're a smart guy.");
} else if (age >= 18 && weight < 70) {
  alert("You're a fat guy.");
} else "You're a baby";

