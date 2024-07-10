"use strict";

// function smileyIt(theText) {
//     theText += " :)";
//     return theText;
//    }

// alert(smileyIt("Hi There!"));


// function whatsTheNumber(){
//     return 3000;
//    }

// let theTotal = whatsTheNumber() + 80;
// console.log(theTotal);

//************************************************************** */
 
let trainSpeed = 10;
let trainPosition = 0;
let animation;
let train = document.getElementById("train");
let stopButton = document.getElementById("stopButton");

train.addEventListener("click", speedUp);
stopButton.addEventListener("click", stopTrain);

function speedUp() {
if (trainSpeed > 10) {
trainSpeed -= 10;
clearInterval (animation);
animation = setInterval (frame, trainSpeed);
}
    function frame() {
       trainPosition += 2;
       train.style.left = trainPosition + 'px';
       checkPosition(trainPosition);
    }
}kmkijiji

function checkPosition(currentPosition) {
if (currentPosition === 1000) {
alert("CRASH!");
consle.log("CRASH!");
clearInterval(animation);
}
}

function stopTrain() {
if (trainPosition < 1000) {
clearInterval (animation);
}
}
   



