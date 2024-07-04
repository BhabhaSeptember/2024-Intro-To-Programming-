"use strict";

// let myFirstName;
// let favoriteFood;
// let birthday;
// let timeOfDay;

// let book;
// book = "JavaScript For Kids for Dummies";
// console.log(book);

// book = "The Holy Bible";
// console.log(book);

//DATA TYPES
//1.STRINGS

// let string = "I am a simple string";
// console.log(string.length); 
// console.log(string.indexOf("am"));

//2.NUMBERS
// let string = "10";
// let number = 10;
// let number2 = "ten"

// console.log(string + number);
// console.log(string * number);
// console.log(number * number2);

//3.BOOLEANS
// console.log( 1 < 10);
// console.log( 100 > 2000);
// console.log( 2 === 2);
// console.log( false === false);
// console.log( 40 >= 40);
// console.log(" ");
// console.log(0);
// console.log(false);
// console.log("apples" === "oranges");
// console.log("apples" === "apples");

//PROMPTING USER FOR INPUT
// let user = prompt("What is your name?");
// function greeting() {
//     return alert(`Hello ${user}`);
// }
// console.log(greeting(user));

//USING DOCUMENT.WRITE
// document.write("How are you?<br>");
// document.write("I'm great! Thanks!<br>");
// document.write("That's awesome!");

//COMBINING INPUT & OUTPUT
let toName = "Bhabha";
let fromName = "The Grammy Awards";

let letterBody = "We are pleased to inform you that your song, 'Can\'t Stop Coding!,' has been voted the Best Song of All Time by the awarding committee.";

document.write("Dear " + toName + ",<br><br>");
document.write(letterBody + "<br><br>");
document.write("Sincerely,<br>");
document.write(fromName);

