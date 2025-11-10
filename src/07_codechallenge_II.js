/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

// provide functions of prompts in const prompt
const prompt = require('prompt-sync')({sigint: true});

// Declerate name and age
let name, age;

// Declerate conditions for what to drink at what age
let ageMilk, ageJuice, ageCola;

// Function for input of name and number
function inputNameAndAge(){

// Assign name and age using prompts
name = prompt("Bitte Namen eingeben: ");
age = Number(prompt("Bitte Alter eingeben: "));

// Assign conditions for what drink at what age
ageMilk = age > 0 && age < 6;
ageJuice = age >= 6 && age < 13;
ageCola = age >= 13 && age < 18;
}

// Function to determine Drink
function determineDrink(){
// Switch case to determine what to trink
switch (true) {
    case (ageMilk):
        console.log(name, "trinkt Milch.")
        break;
    case (ageJuice):
        console.log(name, "trinkt Saft.")
    break;
    case (ageCola):
        console.log(name, "trinkt Cola.")
    break;
    default:
        console.log(name, "trinkt Wein.")
        break;
}

// If Statement to determine what to drink
/** 
if (ageMilk) {
    console.log(name, "trinkt Milch.")
} else if(ageJuice){
    console.log(name, "trinkt Saft.")
} else if(ageCola){
    console.log(name, "trinkt Cola.")
} else{
    console.log(name, "trinkt Wein.")
}
*/
}

// Call function for User input
inputNameAndAge();

// Catch if name ist not a number and call input function again
if (isNaN(age)) {
    // hint only to input numbers
    console.log("Bitte für das Alter nur Zahlen eingeben!") 
    // call function for adding two numbers again
    inputNameAndAge(); 
}

// call function to determine drink
determineDrink();

