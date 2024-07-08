"use strict";

// console.log(typeof 8);

// let doTheMath = 7 + 8 + 36 + 18 + 12;
// console.log(typeof doTheMath);

// console.log(typeof "the cat's favorite toy");

// console.log(typeof automobile);

//--------------------------------------------------------

let dreamCar = {
    make: "Audi R8",
    model: "Spyder V10",
    color: "red",
    year: 2024,
    bodyStyle: "Luxury Style",
    price: 3_613_800.00
   };

//    alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;

//------------------------------------------------------------

document.getElementById("modelyear").innerHTML = dreamCar.year + ", " + dreamCar.bodyStyle;


