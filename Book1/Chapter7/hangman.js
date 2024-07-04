"use strict";
// //CHOOSING RANDOM WORDS
// let words = ["bhabha", "michael", "chullu", "alex", "nkosi", "jada"];
// let word = words[Math.floor(Math.random() * words.length)];

// //CREATING ANSWER ARRAY
// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//   answerArray[i] = "_";
// }

// let remainingLetters = word.length;
// let remainingGuesses = 10;

// while (remainingLetters > 0 && remainingGuesses > 0) {
//   alert(answerArray.join(" "));
//   let guess = prompt(
//     "Guess a letter, or click Cancel to stop playing."
//   ).toLowerCase();
//   remainingGuesses--;

//   if (guess === null) {
//     // alert("Enter a letter")
//     break;
//     // } else if (remainingGuesses === 0) {
//     //     alert("Game over")
//     //     break;
//   } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//   } else {
//     for (let j = 0; j < word.length; j++) {
//       if (word[j] === guess) {
//         answerArray[j] = guess;
//         remainingLetters--;
//         console.log(word[j]);
//       }
//     }
//   }
// }

// function handleGuess(letter) {

// }

// function endGame(win) {
//   if (win) {
//     alert(answerArray.join(" "));
//     alert("Well done! The answer is: " + word);
//   } else {
//     alert("Game over! The answer was: " + word);
//   }
// }
//----------------------------------------------------------------

//Create an array of words
let words = ["one", "two", "three"];

//Pick a random word
let word = words[Math.floor(Math.random() * words.length)];

//Set up answer array
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

let remainingLetters = word.length;
let remainingGuesses = 10;

// document.write("Well done! The answer was: <b> '" + word + "'</b>");

//The game loop

while (remainingLetters > 0 && remainingGuesses > 0) {
  //Show the player their progress
  alert(answerArray.join(" "));

  //Get a guess from the player
  let guess = prompt("Guess a letter, or click Cancel to stop playing");
  //   guess.toLowerCase();
  if (guess === null) {
    //Exit game loop
    document.write("Game over... The word was: '<b>" + word + "</b>'");
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    //Update game state with guess
    guess = guess.toLowerCase();
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
        remainingGuesses--;
      }
      if (guess === word) {
        document.write("Well done! The answer was: " + word);
      }
    }
  }
}

//The end of the game loop

//Show the answer & congratulate player

// document.write(answerArray.join(" "));

// let myName = prompt("What is your name").toLowerCase();
// document.write(myName);
