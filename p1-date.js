/* 
    CIT281 Project 1
    Sam Rutherford
*/
// Step 1
// Initialized array containing names of the week days in strings
// Step 2
// Get the numerical value of the day of the week using new Date() object and getDay() method
// Step 3
// Insert the numerical value into the square brackets of the array to display it ex: array[numerical value]
// Step 4 
// Do it all in one line and console.log()

const weekdays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const date = weekdays[new Date().getDay()];
console.log(date);