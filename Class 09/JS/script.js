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
    alert("Please enter a floating point number");
    return;
  }

  let roundNumber = Math.floor(number);
  let html = '<h1 class="text-primary-theme mb-0">' + roundNumber + "</h1>";
  document.getElementById("output").innerHTML = html;
}
