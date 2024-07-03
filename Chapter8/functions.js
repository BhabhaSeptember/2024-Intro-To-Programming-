// // // "use strict";

// // // let ourFirstFunction = function () {
// // //   console.log("Hello 2024 world!");
// // // };
// // // ourFirstFunction();

// // // //PASSING ARGUMENTS INTO FUNCTIONS
// // // let sayHelloTo = function (name) {
// // //   console.log("Hello " + name + "!");
// // // };
// // // sayHelloTo("Bhabha");

// // // let drawCats = function (howManyTimes) {
// // //   for (let i = 0; i < howManyTimes; i++) {
// // //     console.log(i + " =^.^=");
// // //   }
// // // };
// // // drawCats(3);
// // // drawCats(2);

// // //PASSING MULTIPLE ARGUMENTS
// // // let printMultipleTimes = function (howManyTimes, whatToDraw) {
// // //   for (let i = 0; i < howManyTimes; i++) {
// // //     console.log(i + " " + whatToDraw);
// // //   }
// // // };

// // // printMultipleTimes(5, "[^_-]");

// // // RETURNING VALUES FROM FUNCTIONS
// // let double = function (number) {
// //   return number * 2;
// // };
// // console.log(double(10));

// function double2(number) {
//     return number * 2;
// };
// // console.log(double2(5));

// //USING FUNCTION CALLS AS VALUES
// console.log(double2(double2(3)));

// //INSULT GENERATOR USING FUNCTIONS

// function pickRandomWord(words) {
// return words[Math.floor(Math.random() * words.length)];
// };

//  function generateRandomInsult() {
//   let randomBodyParts = ["Face", "Nose", "Hair"];
//   let randomAdjectives = ["Smelly", "Boring", "Stupid"];
//   let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// let randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
//   // Join all the random strings into a sentence:
//   return randomString;
// };
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());

//LEAVING FUNCTION EARLY WITH RETURN
// function fifthLetter (name) {
//   if (name.length < 5) {
//     return "Your name is less than 5 letters."; //return value without the string will result in undefined
//   }
//   return "The fifth letter of your name is '" + name[4] + "'.";
// };
// console.log(fifthLetter("Bhabha"));
// console.log(fifthLetter("Alex"));

//RETURNING (ALTERNATIVE TO IF...ELSE STATEMENTS)
function medalForScore(score) {
  if (score < 3) {
    return "Bronze";
  }
  if (score < 7 ) {
    return "Silver";
  }
  return "Gold";
};
console.log(medalForScore(7));
console.log(medalForScore(2));
console.log(medalForScore(6));