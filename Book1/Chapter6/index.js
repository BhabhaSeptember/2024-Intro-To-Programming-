"use strict";

// let message = "Hello 2024 World {^_^}!";
// console.log(message);

//CONDITIONALS
// let myName = "Bhabha September";
// let myName = "Bhabha";

// console.log("Hello " + myName + "!");
// if (myName.length > 7) {
//     console.log("Wowzers, you have a REALLY long name!");
// } else {
//     console.log("Nice, your name isn't very long...");
// };

//CHANGING IF...ELSE STATEMENTS (think about SWITCH statements)
// let lemonChicken = false;
// let beefWithBlackBean = false;
// let sweetAndSourPork = false;

// if (lemonChicken) {
//   console.log("Sweet! I'm having lemon chicken!");
// } else if (beefWithBlackBean) {
//   console.log("I'm having the beef.");
// } else if (sweetAndSourPork) {
//   console.log("Yay, I'll have the pork.");
// } else {
//   console.log("Well, I suppose I'll just have rice then.");
// }

//TRY IT OUT
// let yourName = prompt("Please enter your name: ");

// if (yourName === "Bhabha") {
//   console.log("Welcome back Sister!");
// } else if (yourName === "Audrey") {
//   console.log("Hey Mom!");
// } else if (yourName === "Victor") {
//   console.log("Hi father!");
// } else {
//   console.log("Access denied!");
// };

//LOOPS
//WHILE LOOP
// let sheepCounted = 0;
// while (sheepCounted < 10) {
// console.log("I have counted " + sheepCounted + " sheep!");
//  sheepCounted++;
// }
// console.log("Zzzzzzzzzzz");

//FOR LOOP
// for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
//   console.log("I have counted " + sheepCounted + " sheep!");
// }
// console.log("Zzzzzzzzzzz");

// let timesToSayHello = 7;
// for (let i = 0; i < timesToSayHello; i++) {
//   console.log(i + ". Hello!");
// }

//USING FOR LOOPS WITH ARRAYS && STRINGS
// let animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
// for (let i = 0; i < animals.length; i++) {
//  console.log("This zoo contains a " + animals[i] + ".");
// }

// let myName = "Bhabha";

// for(let i = 0; i < myName.length; i++) {
//     console.log("My name contains the letter " + myName[i] + ".");
// };

// for (let x = 2; x < 10000; x = x * 2) {
//     console.log(x);
//    };

//-----------------------------------------------------------------

//PROGRAMMING CHALLENGES
//#1: AWESOME ANIMALS

// let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// for(let i = 0; i < animals.length; i++) {
//     animals[i] = "Awesome " + animals[i];
//     console.log(animals);
// };

//#2: RANDOM STRING GENERATOR
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let randomString = "";
// // let randomStringLength = 5;

// //----------------------------------------------
// // //
// while (randomString.length < 5) {
//   let randomIndex = Math.floor(Math.random() * alphabet.length);
//   randomString += alphabet[randomIndex];
// }
// console.log(randomString);
// //
//----------------------------------------------

// for (let i = 0; i < randomStringLength; i++) {
//   randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// console.log(randomString);

// //#3: HACKER SPEAK
// let input = "javascript is really awesome";
// let output = "";

// for (let i = 0; i < input.length; i++) {
//   if (input[i] === "a") {
//     output += "4";
//   } else if (input[i] === "e") {
//     output += "3";
//   } else if (input[i] === "i") {
//     output += "1";
//   } else if (input[i] === "o") {
//     output += "0";
//   } else {
//     output += input[i];
//   }
// }
// console.log(output);
