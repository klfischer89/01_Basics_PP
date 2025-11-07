
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 2000;
const birthYearMark = 1990;

// Berechnung Alter Iteration I
// let year = 2025;
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;

// Berechnung Alter Iteration II
// let date = new Date();
// let year = date.getFullYear();
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;

// Berechnung Alter Iteration III
let year = new Date().getFullYear();
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);