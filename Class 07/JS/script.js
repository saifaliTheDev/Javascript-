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

//better Formatting

function betterFormatting() {
  let text = document.getElementById("inputText").value;
  if (!text) {
    alert("Please type your text...");
    return;
  }
  // text = text.toLowerCase();
  document.getElementById("output").style.textTransform = "capitalize";
  document.getElementById("output").innerHTML = text;
}

// print all cities

var cities = [
  "Faisalabad",
  "Lahore",
  "Isalamabad",
  "Karachi",
  "Multan",
  "Sheikupura",
  "Jhang",
  "Sargodha",
];

function printCities() {
  document.getElementById("output").innerHTML = " ";
  for (i = 0; i < cities.length; i++) {
    let num = i + 1;
    document.getElementById("output").innerHTML +=
      num + ") " + cities[i] + "<br/>";
  }
}

// Add your City

// function addCity() {
//   let city = document.getElementById("inputText").value;

//   if (city.length < 3) {
//     alert("Please type your name correctly.");
//     return;
//   }

//   let cityFirstLetter = city.charAt(0).toUpperCase();
//   let cityAllLetters = city.slice(1).toLowerCase();
//   let cityWordInCapitalize = cityFirstLetter + cityAllLetters;
//   // console.log(cityWordInCapitalize);
//   // cities.push(cityWordInCapitalize);

//   let cityFound = false;

//   for (i = 0; i < cities.length; i++) {

//     if (cities[i] === cityWordInCapitalize) {
//       cityFound = true;

//       let html =
//         '<span style="color: red; font-size: 20px;"> "' +
//         cityWordInCapitalize +
//         '" </span> is already in list.';

//       document.getElementById("output").innerHTML = html;
//     }
//   }

//   if (cityFound = false) {
//     cities.push(cityWordInCapitalize);
//     let html =
//       '<span style="color: green; font-size: 20px;"> "' +
//       cityWordInCapitalize +
//       '" </span> has been successfully added in list.';
//     document.getElementById("output").innerHTML = html;
//   }
// }

function addCity() {
  let city = document.getElementById("inputText").value;

  if (city.length < 3) {
    alert("Please type your name correctly.");
    return;
  }

  let cityFirstLetter = city.charAt(0).toUpperCase();
  let cityAllLetters = city.slice(1).toLowerCase();
  let cityWordInCapitalize = cityFirstLetter + cityAllLetters;
  console.log(cityWordInCapitalize);
  // cities.push(cityWordInCapitalize);

  let cityFound = false;

  for (let i = 0; i < cities.length; i++) {
    if (cities[i] === cityWordInCapitalize) {
      cityFound = true;
      let html = '<span style="color: red; font-size: 20px;"> "'+ cityWordInCapitalize +'" </span> is already in list.';
      document.getElementById("output").innerHTML = html;
    }
  }

  if (cityFound === false){
    cities.push(cityWordInCapitalize);
    let html = '<span style="color: dark green; font-size: 20px;"> "'+ cityWordInCapitalize +'" </span> has been successfully added in list.';
    document.getElementById("output").innerHTML = html;
  }
}

