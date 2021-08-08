// Please write code that implements various functions, following the requirements in the list below:

//     1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
const maxOfTwoNumbers = (num1, num2) => (num1 > num2 ? num1 : num2);
// const maxOfTwoNumbers = (num1, num2) => Math.max(num1, num2);
// console.log(maxOfTwoNumbers(2, 4));

//     2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = (num1, num2, num3) =>
  [num1, num2, num3].sort((a, b) => a - b).reverse()[0];
// const maxOfThree = (num1, num2, num3) => Math.max(num1, num2, num3);
// console.log(maxOfThree(1, 2, 10));

//     3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel,
//        false otherwise.
const isCharacterAVowel = char => ["a", "e", "i", "o", "u"].includes(char);
// console.log(isCharacterAVowel("b"));

//     4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of
//        numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
const sumArray = numArray => {
  let sum = 0;
  numArray.forEach(num => (sum += num));
  return sum;
};

const multiplyArray = numArray => {
  let result = 1;
  numArray.forEach(num => (result *= num));
  return result;
};
// console.log(multiplyArray([1, 2, 3, 4]));

//     5. Write a function that returns the number of arguments passed to the function when called.
const howManyArgs = ([...args]) => `There are ${args.length} arguments.`;
// console.log(howManyArgs(["hi", 1, true, undefined, null]));

//     6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar")
//        should return the string "ratset gaj".
const reverseString = str => str.split("").reverse().join("");
// console.log(reverseString("jag testar"));

//     7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = wordsArr => {
  let longestStr = wordsArr.sort((a, b) => b.length - a.length)[0];
  return `The longest word in [${wordsArr}] is ${longestStr}.`;
};

// console.log(findLongestWord(["hello", "my", "name", "is", "jeff", "words"]));

//     8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words
//        that are longer than i characters long.
const filterLongWords = (arrayWords, i) =>
  arrayWords.filter(word => word.length > i);

// console.log(filterLongWords(["hello", "my", "name", "is", "jeff", "words"], 4));
