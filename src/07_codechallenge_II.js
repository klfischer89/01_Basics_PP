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

const prompt = require('prompt-sync')({sigint: true});

// Define name and age via prompt
const name = prompt("Bitte Namen eingeben: ");
const age = Number(prompt("Bitte Alter eingeben: "));

// Define conditions for what drink at what age
let ageMilk, ageJuice, ageCola;

ageMilk = age > 0 && age < 6;
ageJuice = age >= 6 && age < 13;
ageCola = age >= 13 && age < 18;

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
if (ageMilk) {
    console.log(name, "trinkt Milch.")
} else if(ageJuice){
    console.log(name, "trinkt Saft.")
} else if(ageCola){
    console.log(name, "trinkt Cola.")
} else{
    console.log(name, "trinkt Wein.")
}

