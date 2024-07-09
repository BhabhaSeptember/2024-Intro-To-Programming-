"use strict";

// //ARRAYS
// let dresser = ["socks","shirts","pants"];
// console.log(dresser[2]);

// //CREATING && ACCESSING ARRAYS
// let  favoriteFoods = [];
// let  favoriteFoods2 = ["broccoli","eggplant","tacos","mushrooms"];

// //STORING DIFF DATA TYPES
// let  myArray = [5, "Hi there", true];
// console.log(myArray[0]);

// //USING VARIABLES INSIDE ARRAYS
// let firstName = "Bhabha";
// let middleName = "Tracy"
// let lastName = "September";
// let Scientist = [firstName, middleName, lastName];
// console.log(Scientist);


// //CHANGING ARRAY ELEMENT VALUES
// let  people = ["Michael","Alex","Chulu"];
// console.log(people);

// people[0] = "Lele";
// console.log(people);

// people[0] = "Mary";
// people[1] = "Bobby";
// people[2] = "Judy";
// people[3] = "Eddie";
// people[4] = "Herbie";
// people[5] = "Tony";
// console.log(people);

//*************************************************************** */

let people = ["Kareem", "Bobby", "Fatma", "Sumaya", "Eddie", "Mr. Hobson", "Ms. Young", "Mrs. O' Doherty", "Bobby"];
let otherPeople = ["Emilie", "Mommy", "Dad", "Kathy"];

//CONCAT METHOD
// people = people.concat(otherPeople);

//TO STRING && VALUE OF METHOD
// document.getElementById("peopleIKnow").innerHTML = people.toString();
// document.getElementById("peopleIKnow").innerHTML = people.valueOf();

// document.getElementById("test").innerHTML = people.indexOf("Eddie");

//JOIN METHOD
// document.getElementById("test").innerHTML = people.join(" # ");


//LAST INDEX OF METHOD
// document.getElementById("test").innerHTML = people.lastIndexOf("Bobby");


//POP METHOD (removes last element)
// people = people.pop();
// console.log(people); //logs the removed item

// people.pop();
// console.log(people);


//PUSH METHOD (adds element at end of array)
// people = people.push("Teddy");
// console.log(people); //shows length of "people" array

// people.push("Teddy");
// document.getElementById("peopleIKnow").innerHTML = people.toString();


//REVERSE METHOD
// people = people.reverse();
// document.getElementById("peopleIKnow").innerHTML = people.toString();


//SHIFT && UNSHIFT METHOD
// people.shift(); //removes first element
// document.getElementById("peopleIKnow").innerHTML = people.toString();

// people.unshift("Teddy"); //adds element to beginning of array
// document.getElementById("peopleIKnow").innerHTML = people.toString();

//SLICE METHOD (picks certain elements to add to new array)
// people = people.slice(0,3);
// document.getElementById("peopleIKnow").innerHTML = people.toString();


//SORT METHOD (arranges elements in alphabetical order)
// people = people.sort();
// document.getElementById("peopleIKnow").innerHTML = people.toString();


//SPLICE METHOD (add or remove elements at certain positions)
people.splice(1,0,"Cathy");
document.getElementById("peopleIKnow").innerHTML = people.toString();






