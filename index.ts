#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n⅍⅍⅍⅍⅍⅍⅍⅍⅍⅍⅍⅍ <<<< WORD COUNTER >>>>  ⅍⅍⅍⅍⅍⅍⅍⅍⅍⅍⅍⅍\n");

const yourSentence: {
    Sentence: string
} = await inquirer.prompt ({
    type: "input",
    message: "Enter Your Sentence Here: ",
    name: "Sentence",
});

//Split method is a separator and give the value in Array
//Trim method remove the white spaces from both end of the string
//Filter method for filter the spaces inside the Array

//COUNT WORDS
let words = yourSentence.Sentence.split(" ").filter(item => item.trim() !== "");
console.log('words: ', words);
console.log(`\nCount of the Words in the Sentence: ${words.length}\n\n`)

//COUNT LETTERS 
let letters = yourSentence.Sentence.split("").filter(item => item.trim() !== "");
console.log('Letters: ', letters);
console.log(`\nCount of the Letters in the Sentence: ${letters.length}`)

