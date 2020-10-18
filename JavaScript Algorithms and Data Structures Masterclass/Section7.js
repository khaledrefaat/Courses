//////////////////////////////////////////// lecture[40] -  Story Time: Martin & The Dragon
// the lecture is about a story betwwen dragon and martin which explains recursion

// Section Objectives
// * - Define what recursion is and how it can be used
// * - Understand the two essential components of recursive function
// * - Visualize the call stack to better debug and understand recursive functions
// * - Use helper method recursion and pure recursion to solve more difficult problems

//////////////////////////////////////////// lecture[41] -  Why Use Recursion?

// What is Recursion: a process (a function in our case) that calls itself

// why should you care or learn about recursion!
// 1 - it's EveryWhere
// JSON.parse - JSON.stringfy - document.getElementById - dom traversal

///////////////////// lecture[42] -  The Call Stack
// But first...let's talk about the functions
// In almost everyProgramming language, there is built in data structure that manages what happens when functions are invoked

// The Call Stack:
// * - it's a stack data sturcture - we'll talk about that later!
// anytime a functions is invoked it is placed(pushed) on the top of the call stack
//  when javascript sees return keyword or when the function ends, the compiler will remove the top of the stack(pop)

// function takeShower() {
// 	return 'Showering!';
// }

// function eatBreakfast() {
// 	let food = coockFood();
// 	return `Eating ${food}`;
// }

// function coockFood() {
// 	let items = [ 'Oatmeal', 'Eggs', 'Protein Shake' ];
// 	return items[Math.floor(Math.random() * items.length)];
// }

// function wakeUp() {
// 	takeShower();
// 	eatBreakfast();
// 	console.log("Ok I'm ready to work ^_^ ");
// }

// wakeUp();

//////////////////////////////////////////// lecture[43] - Our First Recursive Function

// invoke the same functions with a different input untill you reach the base case(the condition when the recursion ends)
// the base case is the condition when the recursion ends(msot important concept to understand)

// function countDown(num) {
// 	if (num <= 0) {
// 		// base case
// 		console.log('Recursion Done!');
// 		return;
// 	}
// 	console.log(num);
// 	num--;
// 	countDown(num);
// }

// countDown(5);

//////////////////////////////////////////// lecture[44] - Our Second Recursive Function

// function sumRange(num) {
// 	if (num === 1) return 1;
// 	return num + sumRange(num - 1);
// }
// console.log(sumRange(5));
// expected output => 15 why! here how the function works
// 5 + sumRange(5 - 1)
// 4 + sumRange(4 - 1)
// 3 + sumRange(3 - 1)
// 2 + sumRange(2 - 1)
// if (num === 1) return 1; 
// so 5 + 4 + 3 + 2 + 1 => 15

// ////////////////////////////////////////// lecture[45] - Writing Factorial Iteratively

// function factorial(num) { // most classic intro to recursive function the factorial example
// 	let total = 1;
// 	for (let i = num; i > 1; i--) {
// 		total *= i;
// 	}
// 	return total;
// }
// console.log(factorial(4));

// ////////////////////////////////////////// lecture[46] - Writing Factorial Recursively

// function factorial(num) {
//     if (num === 1) return num;
//     return num * factorial(num - 1);
// }

// console.log(factorial(4));

// ////////////////////////////////////////// lecture[47] - Common Recursion Pitfalls
// there is no base case -_- (like this)
// function factorial(num) {
//     return num * factorial(num - 1);
// }
// console.log(factorial(4));

// forgetting to return or returning the wrong thing -_- (like this)
// function factorial(num) {
//     if (num === 1) return num;
//     return num * factorial(num );
// }
// console.log(factorial(4));

// ////////////////////////////////////////// lecture[48] - Helper Method Recursion


// function collectOddValue(arr) {
//     let result = [];

//     function checkOdd(num) {
//         if (num.length === 0) return; // base case
//         if (num[0] % 2 !== 0) result.push(num[0]);
//         checkOdd(num.slice(1)); // this is the step that makes the function ends
//     }
//     checkOdd(arr);
//     return result;
// }

// console.log(collectOddValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ////////////////////////////////////////// lecture[49] - Pure Recursion

// function collectOddValue(arr) {
//     let newArr = [];
//     if (arr.length === 0) return newArr; // baseCase

//     if (arr[0] % 2 !== 0) newArr.push(arr[0]);

//     newArr = newArr.concat(collectOddValue(arr.slice(1)));

//     return newArr;

// }

// console.log(collectOddValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// /////////////////////////////////////////////////////////////////// Tips
// For Arrays Use methods like Slice, Spread Operator, concat that make copies of arrays so you don't mutate them
// Remember that strings are immutable so you will need to use methods like slice , substr, substring to make copies of strings
// to make copies of objects use Object,assign, spread operator