
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/
 
// provide functions of promp-sync as prompt constant
const prompt = require('prompt-sync')({sigint: true});

// provide variables for calculating a sum of two numbers
let digit_one, digit_two, sum;

// function for adding two numbers and safe the result in sum
function add_two_numbers(){
    // Enter digit one and cast to number 
    digit_one = Number(prompt("Zahl 1: ")); 
    // Enter digit two and cast to number
    digit_two = Number(prompt("Zahl 2: ")); 
    // add the two numbers
    sum = digit_one + digit_two; 
};

// call function for adding two numbers
add_two_numbers(); 

// catch input that are no numbers
if (isNaN(sum)) {
    // hint only to input numbers
    console.log("Bitte nur Zahlen eingeben!") 
    // call function for adding two numbers again
    add_two_numbers(); 
} else {
    // Output sum of the two numbers
    console.log("Die Summe der Zahlen ist:" , sum); 
}

