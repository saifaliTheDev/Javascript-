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
      let html =
        '<span style="color: red; font-size: 20px;"> "' +
        cityWordInCapitalize +
        '" </span> is already in list.';
      document.getElementById("output").innerHTML = html;
    }
  }

  if (cityFound === false) {
    cities.push(cityWordInCapitalize);
    let html =
      '<span style="color: dark green; font-size: 20px;"> "' +
      cityWordInCapitalize +
      '" </span> has been successfully added in list.';
    document.getElementById("output").innerHTML = html;
  }
}

// check City in list

function checkCity() {
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
      let html =
        '<span style="color: dark green; font-size: 16px;"> "' +
        cityWordInCapitalize +
        '" </span> already present in list.';
      document.getElementById("output").innerHTML = html;
    }
  }

  if (cityFound === false) {
    let html =
      'SORRY &#128528; We couldn\'t find your city<span style="color: red; font-size: large;"> "' +
      cityWordInCapitalize +
      '" </span> in list. Click <span style="color: green; font-size: large;"> Add your City in List</span> to add your city.&#128529';
    document.getElementById("output").innerHTML = html;
  }
}

function addEmoji(emoji) {
  document.getElementById("output").innerHTML += emoji;
}
// Find word

function findWord() {
  let newOriginalText = originalText.toLowerCase();

  let word = document.getElementById("inputText").value;

  if (!word) {
    alert("Please type a word to find");
  }
  word = word.toLowerCase();

  let findWord = newOriginalText.indexOf(word);
  console.log(findWord);

  if (findWord !== -1) {
    alert("word found at index : " + findWord);
    let html =
      'Your Word <span style = "color: green; font-size: 18px" > ' +
      word +
      " </span> found at index: " +
      findWord;
    document.getElementById("output").innerHTML = html;
  } else {
    alert("word not found");
    let html =
      '"Your Word <span style="color: red; font-size: 18px;">"' +
      word +
      '"</span> doesn\'t exist in the Original String"' +
      findWord;
    document.getElementById("output").innerHTML = html;
  }
  // if (findWord == -1) {
  //   alert("word not found");
  // } else alert("word found at index : " + findWord);
}

// Replace word

// {
//   let cnic = "33100-1234567-8";
//   let word = "-";
//   let replaceWith = "";
//   word = new RegExp(word, "g");
//   let cnicWithoutDashes = cnic.replace(word, replaceWith);
//   console.log(cnicWithoutDashes);
// }

// let cnic = "33102-3601050-1";
// let word = "-";
// let replaceWith = "";
// word = new RegExp(word, "g"); // selects all dashes in the cnic, otherwise it selects first dash only in cnic.
// let cnicWithoutDashes = cnic.replace(word, replaceWith);

function replaceWord() {
  let newOriginalText = originalText.toLowerCase();

  word = document.getElementById("inputText").value;

  if (!word) {
    alert("Please type a word for replacing.");
    return;
  }

  let replaceWith = prompt("Enter a word that you want to replace with");

  if (!replaceWith) {
    alert("Please type a word to replace with " + word + ".");
    return;
  }

  word = word.toLowerCase();
  word = new RegExp(word, "g");
  replaceWith = replaceWith.toLowerCase();

  let replaceWord = newOriginalText.replace(word, replaceWith);
  document.getElementById("output").innerHTML = replaceWord;
}
