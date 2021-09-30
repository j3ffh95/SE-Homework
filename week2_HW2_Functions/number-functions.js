//     1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
const maxOfTwoNumbers = (num1, num2) => (num1 > num2 ? num1 : num2);
// const maxOfTwoNumbers = (num1, num2) => Math.max(num1, num2);
// console.log(maxOfTwoNumbers(2, 4));

//     2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = (num1, num2, num3) =>
  [num1, num2, num3].sort((a, b) => a - b).reverse()[0];
// const maxOfThree = (num1, num2, num3) => Math.max(num1, num2, num3);
// console.log(maxOfThree(1, 2, 10));

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
