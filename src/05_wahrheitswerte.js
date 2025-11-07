
/* Berechnung Alter */

// Deklaration
const prompt = require('prompt-sync')({sigint: true});
let agePerson1, agePerson2;

const namePerson1 = prompt("Name Person 1: ");
const namePerson2 = prompt("Name Person 2: ");
const birthYearJohn = Number(prompt("Geburtsjahr John: "));
const birthYearMark = Number(prompt("Geburtsjahr Mark: "));

// Berechnung Alter Iteration III
let year = new Date().getFullYear();
agePerson1 = year - birthYearJohn;
agePerson2 = year - birthYearMark;

// Ausgabe
console.log("agePerson 1: " + agePerson1);
console.log("agePerson 2: " + agePerson2);

// Deklaration
let isJohnOlder;

// function for comparison who is older
function compareAge(){
    // compare who is older
    if (agePerson1 > agePerson2) {
        isJohnOlder = true;
        console.log(namePerson1, "ist älter.")
    } else if (agePerson1 < agePerson2){
        isJohnOlder = false;
        console.log(namePerson2, "ist älter.")
    } else {
        console.log("Beide gleich alt.")
    }
}

// call function to determine who is older
compareAge();