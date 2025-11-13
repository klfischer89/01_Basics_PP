

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

// provide functions of prompts in const prompt
const prompt = require('prompt-sync')({sigint: true});

// provide Text in case of Errors
const ERROR_STR_DIV = "Teilen durch 0 nicht möglich!";
const ERROR_STR_NUM = "Bitte nur Zahlen eingeben!\nBitte erneut versuchen.";
const ERROR_STR_OP = "Bitte nur gültige Operatoren eingeben!\nGültige Operatoren sind (+, -, /, :, *)!";

// define variables
let number, op;
let regexOp = /[+\-/*:]/;

/** Dateneingabe */

startApp()

// main function
function startApp() {
	output(calculator(getNum(),getNum(),getOp()));
}

// get number by user input, check if its a number, if not get new user input
function getNum() {
	number = Number(prompt("Zahl?: "));
	if (isNaN(number)) {
		console.error(ERROR_STR_NUM);
		return getNum();
	}
	return number;
}

// get operator by user input, check if its a valid operator, if not get new user input
function getOp() {
	op = prompt("OP?: ");
	if (!regexOp.test(op)) {
		console.error(ERROR_STR_OP);
		return getOp();
	}
	return op;
}

/** WAS soll gemacht werden? */

// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));
function calculator(a, b, op){

	// choose calculation using the operator
	switch (op) {
		case "+":
			return add(a,b);
		case "-":
			return subtract(a,b)
		case "*":
			return multiply(a.b)
		case "/":
		case ":":	
			return divide(a,b)
		default:
			break;
	}

}

/** WIE sollen die Aufgeben gelöst werden? */

// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function add(a,b) {
	return a + b;
}

// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
function subtract(a,b) {
	return a - b;
}

// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
	return  a * b;
}

// module: division a / b |  test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(0,2));
// output(divide(3,0));
// output(divide(0,0));
function divide(a,b) {
	if (!b) {
		return(ERROR_STR_DIV);
	}
	return a / b;
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  