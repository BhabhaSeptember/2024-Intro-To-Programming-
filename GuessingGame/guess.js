// // /*PART ONE: */
// let secret = 7;
// let answer = prompt("Please guess the secret number (1-10): ");

// //Converting the string 'Guess' to an integer for comparison
// let guess = parseInt(answer);
// if (guess === secret) {
//   alert("CORRECT!");
//   document.write("Refresh the page to play again! {^_^}")
// } else {
//   alert("Sorry, incorrect");
//   document.write("Refresh the page to try again! {^.^}");
// }

// /* PART TWO: */
// let secret = 10;
// let guess = parseInt(prompt("Please guess a secret number between 1-10 : "));

// if (guess === secret) {
//     alert("CORRECT! -- END OF GAME -- ");
//     document.write("Refresh the page to play again! {^_^}");
// } else {
//     alert("Oooops, incorrect...");
//     document.write("Refresh the page to try again! {^.^}");
// }

/* PART THREE: USING WHILE LOOP */
let secret = Math.floor(Math.random() * 11);
let answer;

guess();

  while (answer !== secret) {
    if (answer < secret) {
      alert("Incorrect, too low! Try again");
      guess();
      continue;
    } else if (answer > secret) {
      alert("Incorrect, too high! Try again");
      guess();
      continue;
    }
  }
endGame();

function guess() {
  answer = parseInt(prompt("Please guess a secret number between 0-10 : "));
}

function endGame() {
  alert("Correct! The secret number is: [ " + secret + " ]");
  document.write("Refresh the page to play again! {^_^}");
}
