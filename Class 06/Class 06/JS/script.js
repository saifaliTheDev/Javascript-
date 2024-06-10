// Declare an array
// Index starts from 0

let cities = ["Faisalabad", "Lahore", "Islamabad"];
console.log(cities[1]);

// Add value at different indexes of an existing array

cities[3] = "Karachi";
// cities[6] = "Multan"
console.log(cities);

// Array Methods
// Push method is used to insert values at the end of an array.

cities.push("Sialkot", "Rawalpindi", "Jhang");
console.log(cities);

// Pop method is used to remove values from the end of an array.

cities.pop();
cities.pop();
cities.pop();
console.log(cities);

// shift method is used to remove values from the starting of an array.

cities.shift();
console.log(cities);

// unshift method is used to add values at the beginning of an array.

cities.unshift("Gujranwala", "Sargodha");
console.log(cities);

// splice method is used to delete values from anywhere in an array.

let cities1 = [
  "Gujranwala",
  "Sargodha",
  "Sialkot",
  "Rawalpindi",
  "Jhang",
  "Faisalabad",
  "Lahore",
  "Islamabad",
];
console.log(cities1);

cities1.splice(1, 3);
console.log(cities1);

// delete ka saath insertion bhi perform krne k lye
// value at index 1 deleted , then values are inserted an array after 0 index

cities1.splice(0, 1);
console.log(cities1);

/* push - insertion at ending
 pop - deletion from ending
  shift - deletion at beginning
  unshift - insertion at beginning
  splice- insertion and deletion at the same time.
  
  */
let cities2 = [
  "Gujranwala",
  "Sargodha",
  "Sialkot",
  "Rawalpindi",
  "Jhang",
  "Faisalabad",
  "Lahore",
  "Islamabad",
];

cities2.splice(1, 0, "Sheikhpura", "Shahkot");
console.log(cities2);

// The slice method in JavaScript is used to create a new array containing a portion of an existing array.

let cities3 = ["a", "b", "c", "d", "e", "f", "g"];

let newCities = cities3.slice(3);
console.log(newCities);

// newCities.splice(0, 1);
// console.log(newCities);
