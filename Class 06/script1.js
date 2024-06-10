let branches = ["allied", "babar", "canal", "dGround", "gulistan"];
let lengthOfArray = branches.length;
console.log("Length of the array is: " + lengthOfArray);

for (let i = 0; i <= branches.length; i++) {
  console.log(branches[i]);
}

// Print my name

function myName() {
  let myName = document.getElementById("inputText").value;

  // if myName = "" False result & if = "any character" True

  // NOR operator is used..

  if (!myName) {
    alert("Please type your name");
    return;
  }

  document.getElementById("output").innerHTML = myName;
}
