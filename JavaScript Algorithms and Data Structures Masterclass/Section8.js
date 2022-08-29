///////////////////// Coding Exercise 10: power

// function power(base, exponent) {
//     if (exponent === 0) return 1;

//     return base * power(base, exponent - 1);

// }

// console.log(power(2, 4));

// Expected outputs
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

///////////////////// Coding Exercise 11: factorial

// function factorial(num) {
//     if (num === 0) return 1;

//     return num * factorial(num - 1);
// }

// console.log(factorial(4));


///////////////////// Coding Exercise 12: productOfArray

// function productOfArray(arr) {
//     if (arr.length === 0) return 1;

//     return arr[0] * productOfArray(arr.slice(1));
// }

// // 1 * productOfArray(arr.slice(1));
// // 2 * productOfArray(arr.slice(1));
// // 3 * productOfArray(arr.slice(1));
// // 10 * productOfArray(arr.slice(1));

// console.log(productOfArray([1, 2, 3, 10]));


///////////////////// Coding Exercise 13: recursiveRange
// write a function called recursiveRange  which accepts a number and adds up all the numbers from 0 to the number passed to the function 

// function recursiveRange(num) {
//     if (num === 0) return 0;
//     return num + recursiveRange(num - 1)
// }

// console.log(recursiveRange(10));

///////////////////// Coding Exercise 13: fib
// Write a recursive function called fib  which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// function fib(num) {
//     if (num <= 2) return 1;

//     return fib(num - 1) + fib(num - 2);
// }

// // 9 + 8 + 7 + 6 + 5 + 4 + 3 

// console.log(fib(10));

// expected output 
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

