

/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}

// constant strings for errors and infos
const ERROR_STR_OP = "Bitte definieren Sie Ihre Sätze nur nach den vereinbarten Arten:\nS -> .\nQ -> ?\nE -> !"

// provide functions of prompts in const prompt
const prompt = require('prompt-sync')({sigint: true});

/*** Funktion mit Array als Parameter */
// mögliche Tests:
/**
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));
output(getSentence(["Ich","bin","Max"],"a"));
output(getSentence(["Bist","du","Max"],"C"));
output(getSentence(["Ich","bin"],1));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],));
output(getSentence(["Ich","bin","Max"],""));
*/
function getSentence(arr,op) {

    // initialize map for punctuation marks
    let map = initOpAndPunct();
    // provide space for strings
    const GAP = " ";

    // check if given operaotr is a key in the map, if not return error string
    // if it is return joined array followed by mapped punctuation mark
    if (!determinePunct(map,op)) {
        return ERROR_STR_OP
    } else {
        return arr.join(GAP) + determinePunct(map,op);
    }
    
}

//output(addPunct());
function addPunct(map){

    map = initOpAndPunct();

    map.set(prompt("Bitte geben Sie einen neuen Operator ein, der ein Satzzeichen darstellen soll: "),
            prompt("Bitte geben Sie ein Satzzeichen ein, das durch diesen Operator erzeugt werden soll: "));

    return map;        
}

// determine punctuation by checking if the operator is included as a key in the map
/** 
 output(determinePunct(initOpAndPunct(), "a"))
 output(determinePunct(initOpAndPunct(), "S"))
 output(determinePunct(initOpAndPunct(), 1))
*/
function determinePunct(map, op){
    if (map.has(op)) {
        return map.get(op);
    }
}

// initialize map containing valid operators as keys and punctuations as values 
// output(initOpAndPunct());
function initOpAndPunct(){
    
    let map = new Map([
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