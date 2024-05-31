document.getElementById("askNumberFromUser").onclick = function () {
  let num1 = +prompt("Enter your 1st Number");
  console.log(num1);

  if (num1 == 0) {
    alert("Please enter 1st number");
    return;
  }

  let num2 = +prompt("Enter your 2nd Number");
  if(num2 == 0) {
    alert("Please enter 2nd number")
    return;
  }

  console.log(num1 + num2);
};

