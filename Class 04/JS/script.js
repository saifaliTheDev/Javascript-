// alert("")
// alert(123)
// alert([])
// alert({}) //object
// alert(true)
// alert(null)

// // function cannot add into alert. kun k function ke andar wala code run hona hota hey.


// alert("Ismail")

// var userName = "Ismail"

// Data types
// String
// Number
// Boolean
// Object
// Array
// undefined
// null
// function

// const handleSubmit = function (){}
// handleSubmit()

// const userName = "Ahmad"

// userName = "Talha"

// console.log(userName);


// Arithmetic Operators

// {let num = 2;
// // num = num + 1;
// // console.log(num++);  //Original Value of num Increased but output not being showed in console.
// console.log(++num);  // Value increased showed in console/ Output
// }

// {let num = 50;
// console.log(num++);
// console.log(num);
// }

// {
//     let num = 1;
//     console.log(num--); 
//     console.log(num); 
// }

// //
// let firstName = "Saif";
// let lastName = "Ali";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// Concatenate Text Strings

document.getElementById("concatenateSomeStrings").onclick = function (){
    let message = "Good day";
    let name = "Saif Ali";
    let banger = "!";

    console.log(message + " " + name  + banger);


}

alert ("yeh kia ho rha hey");
// Prompts and if statements

document.getElementById("askNameFromUser").onclick = function (){
    let message = "Good day";
    let firstName = prompt("Enter your First Name");
    let lastName = prompt("Enter your Last Name");
    let banger = "!";

    console.log(message +  " " +  firstName +lastName + banger);


}
 /* prompt ke through jo value aai gi wo string me receive hogi
 or agar number me output chahye ho to hum prompt keyword se phle
 + symbol use krlete hain. */

 document.getElementById("askNo.FromUser").onclick = function (){
    let num1 = +prompt("Enter your 1st Number");
    let num2 = +prompt("Enter your 2nd Number");
    
    console.log ( num1 + num2);
 }
 











