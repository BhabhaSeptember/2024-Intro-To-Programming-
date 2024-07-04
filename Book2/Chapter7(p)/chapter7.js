"use strict";

// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("head").style.transform = "rotate(15deg)";

// document.getElementById("body").style.border = "2px black solid";
// document.getElementById("mouth").style.borderRadius = "4px";
// document.getElementById("righteye").style.border = "4px yellow dotted";

// document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// document.getElementById("body").style.color = "#FF0000";
// document.getElementById("head").style.borderTop = "5px black solid";

// //------------------------------------------------------------------

// document.getElementById("head").style.transform = "rotate(-15deg)";
// document.getElementById("nose").style.borderRadius = "50%";
// document.getElementById("rightarm").style.backgroundColor = "green";
// document.getElementById("mouth").style.backgroundColor = "hotpink";

//-------------------------------------------------------------------

let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");

let leftArm = document.getElementById("leftarm");


rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);

leftArm.addEventListener("click", moveRightLeft);

function moveUpDown(e) {
  let robotPart = e.target;
  let top = 0;
  let id = setInterval(frame, 50); // draw every 10ms
  function frame() {
    robotPart.style.top = top + "%";
    top++;
    if (top === 20) {
      clearInterval(id);
    }
  }
}

function moveRightLeft(e) {
    let robotPart = e.target;
    let left = 0;
    let id = setInterval(frame, 50); // draw every 10ms
    function frame() {
      robotPart.style.left = left + "%";
      left++;
      if (left === 70) {
        clearInterval(id);
      }
    }
  }