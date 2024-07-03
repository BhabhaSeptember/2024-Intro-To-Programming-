"use strict";
//CHOOSING RANDOM WORDS
let words = ["bhabha", "michael", "chullu", "alex", "nkosi", "jada"];
let word = words[Math.floor(Math.random() * words.length)];

//CREATING ANSWER ARRAY
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
};
let remainingLetters = word.length;
let remainingGuesses = 5;


while (remainingLetters > 0 && remainingGuesses > 0) {
    alert(answerArray.join(" "));
    let guess = prompt("Guess a letter, or click Cancel to stop playing.").toLowerCase();
    remainingGuesses--;
    
    if (guess === null) { 
        // alert("Enter a letter")
        break;
    // } else if (remainingGuesses === 0) {
    //     alert("Game over")
    //     break;

    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        for ( let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }  
}
alert(answerArray.join(" "));
alert("Well done! The answer is: " + word);












