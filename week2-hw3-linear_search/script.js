// - Create an array of at least 10 values.
// - Take an input from the user to look for in the array
// - Find and display the total number of occurrences of the user input value in the array
// - Also, display the positions in which they occur.      HINT: Create another array for keeping track of positions
const prompt = require('prompt-sync')()

let userInput = parseInt(prompt('Enter a number to look for in array: '));

// console.log(userInput)
let array = [1, 3, -10, 3, 12, 1, 2, 15, 3, 10, -10];

let positions = []
let occurrences = 0
for(let i = 0; i < array.length; i++) {
    let cureentNum = array[i];
    if(cureentNum === userInput) {
        occurrences++
        positions.push(i + 1)
    } 
}

console.log(`There are ${occurrences} in the array and they are in position ${positions}`)


