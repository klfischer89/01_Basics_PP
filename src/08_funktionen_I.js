// provide functions of prompts in const prompt
const prompt = require('prompt-sync')({sigint: true});

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
// test();

// Funktionsrumpf | callee
// Funktionsdeklaration
function test(){
    console.log("Hallo, Kevin!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// call
//ausgabeNamen();

// Funktion
function ausgabeNamen() {
    // get name via user input
    let firstName = prompt("Bitte Namen eingeben: ");
    // say hello to somebody
    console.log("Hallo,", firstName + "!");
}

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// define global variable for first name
let firstNameGlobal = prompt("Bitte Namen eingeben: ")

// call function with param
ausgabeNamenMitParam(firstNameGlobal);

// function awaiting a param for first name and greet this person
function ausgabeNamenMitParam(firstNameGlobal) {
    console.log("Hallo,", firstNameGlobal + "!")
}