

/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}

const ERROR_STR_OP = "Bitte definieren Sie Ihre Sätze nur nach den vereinbarten Arten\nDiese sind:\nS -> .\nQ -> ?\nE -> !"

let regexOp = /^[SQE]$/;
let arr, op, arrOp, arrPunct, mapOpPunct;


/*** Funktion mit Array als Parameter */
// mögliche Tests:
//output(getSentence(["Ich","bin","Max"],"S"));
//output(getSentence(["Bist","du","Max"],"Q"));
//output(getSentence(["Ich","bin"],"E"));
//output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

function getSentence(arr,op) {
   // ???
}

// Check if there ist a valid operator
/**
output(checkOperator("S"));
output(checkOperator("E"));
output(checkOperator("Q"));
output(checkOperator("a"));
output(checkOperator("C"));
output(checkOperator("SEF"));
*/
function checkOperator(op) {
    if (!regexOp.test(op)) {
        return ERROR_STR_OP;
    } else {
        return op.toLowerCase();
    }
}

// initialize map containing valid operators as keys and punctuations as values 
output(initOpAndPunct());
function initOpAndPunct(){

    /**
    arrOp = ["S", "Q", "E"];
    arrPunct = [".", "?", "!"]
    mapOpPunct = new Map(arrOp.map((key, i) => [key, arrPunct[i]]));
    */
   
    map = new Map([
        ["S", "."],
        ["Q", "?"],
        ["E", "!"],
    ])

    return map;
}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}