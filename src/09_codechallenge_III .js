
/***** Codechallenge III *****/

// ControlFlow / Funktionen

// Erstellen Sie ein JS-Programm, dass einen Bestellvorgane bei MD
// simuliert. Orientieren Sie sich dabei am Struktogramm in der Datei
// bestellung.json  - Datei bitte in den online-Editor STRUCTOG laden
// https://ddi.education/struktog/

// provide functions of prompts in const prompt
const prompt = require('prompt-sync')({sigint: true});

// define variables for food and drink
let food;
let drinkOrThx;

// call the function welcomeToMD to initialize the ordering process
welcomeToMD();

// function for control flow
function welcomeToMD() {
    // prepare welcome string and string for choosing burger
    let welcome = "Guten Tag bei MD, Ihre Bestellung bitte!";
    let chooseOption = "Hamburger (1), Cheeseburger(2), Chilliburger(3)?";
    // compose order string
    let orderString = welcome + "\n" + chooseOption;
    // output order string
    output(orderString);
    // get value for food by call of function oderFood
    food = orderFood();
    // get value for drink or thanks by call of function orderDrink
    drinkOrThx = orderDrink();
    // get the complete order and output
    let completeOrder = thankYouAndBye(food, drinkOrThx);
    output(completeOrder);
}

// function for choosing a burger
function orderFood() {

    // get user input for choice
    let customerChoice = parseInt(prompt());
    // define variable for burger
    let customerBurger;

    // determine customers choice for burger
    switch (customerChoice) {
        case 1: // Hamburger
            customerBurger = "Hamburger";
            break;
        case 2: // Chesseburger
            customerBurger = "Cheeseburger";
            break;
        case 3: // Chilliburger
            customerBurger = "Chilliburger";
            break;
    
        default: // if costumer is unsatisfied by the options
            customerBurger = "Big Mac"
            break;
    }
    
    // return customers choice for burger
    return customerBurger;
}

// function to ask for a drink
function orderDrink() {
    // overwrite string for choosing drink and output
    let chooseOption = "Möchten Sie ein Getränk dazu? (j/n)";
    output(chooseOption);
    // get user input either wants a drink or not
    let customerChoice = prompt();
    let customerDrinkOrThx;
    // check user choice
    if (customerChoice == "j") {
        // determine drink by call of function chooseDrink
        customerDrinkOrThx = chooseDrink();
    } else if(customerChoice == "n") {
        // dont return a drink if customer dont want one
        return;
    } else {
        // ask customer again for a drink and return for returning the value through recursion
        return orderDrink();
    }
    // return string for drink or thanks and bye
    return customerDrinkOrThx;
}

// function for choosing a drink
function chooseDrink() {
    // prepare and output string for choosing a drink
    let chooseDrinkString = "Cola (1), Fanta (2), Sprite (3)?"
    output(chooseDrinkString);
    // get user input for drink
    let customerChoice = parseInt(prompt());
    // define variable for customer drink
    let customerDrink;

    // determine customer choice for drink
    switch (customerChoice) {
        case 1: // Cola
            customerDrink = "Cola";
            break;
        case 2: // Fanta
            customerDrink = "Fanta";
            break;
        case 3: // Sprite
            customerDrink = "Sprite";
            break;
    
        default: // if costumer is unsatisfied by the options
            customerDrink = "Bierchen"
            break;
    }

    // return customer choice for drink
    return customerDrink;
}

// function to complete order
function thankYouAndBye(food, drinkOrThx) {
    // prepare variable for complete order 
    let completeOrder = "Hier ist ihre Bestellung; ";
    // check if there is a drink included in the order
    if (!drinkOrThx) {
        completeOrder += food;
    } else {
        completeOrder += food + " " + drinkOrThx;
    }
    // ading bye to complete order
    completeOrder += "\nVielen Dank, und Auf Wiedersehen!"
    // return complete Order
    return completeOrder;
}

// function for outputting a string
function output(outputData) {
    console.log(outputData);
}