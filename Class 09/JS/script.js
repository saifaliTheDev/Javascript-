// Clear input field

function clearInput() {
  document.getElementById("inputText").value = " ";
}

// Clear output
function clearOutput() {
  document.getElementById("output").innerHTML = " ";
}

// Round a Number | if value is -ve, then it add only .5 to the value if points me .5 ho

function round() {
  let number = document.getElementById("inputText").value;
  if (!number) {
    alert("Please enter a floating point number");
    return;
  }

  let roundNumber = Math.round(number);
  let html = '<h1 class="text-primary-theme mb-0">' + roundNumber + "</h1>";
  document.getElementById("output").innerHTML = html;
}

// Ceil a Number

function ceil() {
  let number = document.getElementById("inputText").value;
  if (!number) {
    alert("Please enter a floating point number");
    return;
  }

  let roundNumber = Math.ceil(number);
  let html = '<h1 class="text-primary-theme mb-0">' + roundNumber + "</h1>";
  document.getElementById("output").innerHTML = html;
}

// Floor a Number

function floor() {
  let number = document.getElementById("inputText").value;
  if (!number) {
    Toastify({
      text: "Please enter a floating point number",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#b80f0a",
      },
    }).showToast();

    return;
  }

  let roundNumber = Math.floor(number);
  let html = '<h1 class="text-primary-theme mb-0">' + roundNumber + "</h1>";
  document.getElementById("output").innerHTML = html;
}

// Random Number | 0.0000000000000000 to 0.9999999999999999 , 16 decimals number.

function random() {
  let randomNumber = Math.random();
  let html = '<h1 class="text-primary-theme mb-0">' + randomNumber + "</h1>";
  document.getElementById("output").innerHTML = html;
}

// Throw a Dice

function dice() {
  //Generate a random number between 0 and 1:

  let randomNumber = Math.random();

  //Scale it to a range from 0 to 6:

  randomNumber = randomNumber * 6;

  //Shift the range to start from 1 instead of 0:

  randomNumber = randomNumber * 6 + 1;

  console.log(randomNumber);
  let dice = Math.floor(randomNumber);
  console.log("random numbers after floor =>", dice);

  let html =
    '<h1 class="text-primary-theme mb-0">' +
    dice +
    "</h1> <span> Generating a number from 1 to 6. </span>";
  document.getElementById("output").innerHTML = html;
}

// Generate a strong password

function password() {
  let inputValue = document.getElementById("inputText").value;
  let length = inputValue;

  let randomString = " ";
  let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let symbols = '~!@#$%^&*_-+=/.?,"';

  let possibleString =
    upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols;
  console.log(possibleString);

  let limit = length;
  for (let i = 0; i < limit; i++) {
    randomNumber = Math.random();

    randomString += possibleString.charAt(
      Math.floor(randomNumber * possibleString.length)
    );
    console.log(randomString);

    let html =
      '<h6 class="text-secondary mb-0"> ' +
      randomString +
      ' </h6>  <p>Generating random string & length is: <span class="text-danger ">"' +
      length +
      '"</span></p>';
    document.getElementById("output").innerHTML = html;
  }
}
