var originalText =
  "I love my country Pakistan.<br>I like my city Faisalabad.<br>I love my Homeland.";
function original() {
  document.getElementById("originalText").innerHTML = originalText;
}
original();

//lowerCase

function lowerCase() {
  let lowerCaseText = originalText.toLowerCase(); // tolowerCase() is a method
  console.log(lowerCaseText);
  document.getElementById("output").innerHTML = lowerCaseText;
}

//upperCase

function upperCase() {
  let upperCaseText = originalText.toUpperCase();
  document.getElementById("output").innerHTML = upperCaseText;
}

//capitalize

function capitalize() {
  //   let capitalizeText =
  //   '<span style="text-transform: capitalize;"> ' + originalText + "  </span>"; // using css

  document.getElementById("output").style.textTransform = "capitalize"; // styling apply on element
  document.getElementById("output").innerHTML = originalText;
}
