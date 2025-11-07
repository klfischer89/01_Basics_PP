
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true}); // provide functions of promp-sync as prompt constant
let digit_one = Number(prompt("Zahl 1: ")); // Enter digit one and cast to number 
let digit_two = Number(prompt("Zahl 2: ")); // Enter digit two and cast to number
let sum = digit_one + digit_two; // add the two numbers

// catch input that are no numbers
if (isNaN(sum)) {
    console.log("Bitte nur Zahlen eingeben!") // hint only to input numbers
} else {
    console.log("Die Summe der Zahlen ist:" , sum); // Output sum of the two numbers
}
