/* 
    CIT 281 Project 1
    Sam Rutherford
*/
// initialize variable for length of string
// initialize string variable containing lowercase alphabet letters then split into an array
// initialized variable contain result
// for loop which adds letters from the array into the result variable
// initialized random number between 0 - 25 in for loop
// console.log()

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const stringLength = getRandomInteger(5,25);
let result = "";

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i <= stringLength; i++){
    let random = getRandomInteger(0,27);
    result = result + alphabet[random]
}
console.log(result);