//     3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel,
//        false otherwise.
const isCharacterAVowel = char => ["a", "e", "i", "o", "u"].includes(char);
// console.log(isCharacterAVowel("b"));

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
