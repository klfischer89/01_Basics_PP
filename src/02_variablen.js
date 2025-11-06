// Zeilenkommentar

/** 
 * Block Kommentar
 */

/***** Variablen 01 *******/
 
/* Deklaration + Wertzuweisung I */

/**let firstName; // Deklaration (Definition)
console.log(firstName); // Ausgabe
firstName = "Max"; // Wertzuweisung | Assignment
console.log("Inhalt: " + firstName); // Ausgabe mit Inhalt
let familyName = "Mütze"; // Deklaration & Wertzuweisung
// Trennen von Strings mit , (entählt Leerzeichen) oder + (kein Leerzeichen)
console.log("Sei gegrüßt" , firstName , familyName + ", lebe lang und in Frieden!");
*/

/*  
    Wertzuweisung II + Datentypen 
    JS ist ein untypisierte Sprache!
*/

let test;

/* undefined */
console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
console.log("Inhalt: " + test); // Ausgabe Inhalt
console.log("----------------")

test = "hi"; // string
console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
console.log("Inhalt: " + test); // Ausgabe Inhalt
console.log("----------------")

test = 2; // number
console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
console.log("Inhalt: " + test); // Ausgabe Inhalt
console.log("----------------")

test = true; // boolean
console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
console.log("Inhalt: " + test); // Ausgabe Inhalt
console.log("----------------")
