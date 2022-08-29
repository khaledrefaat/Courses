////////////////////////////////////////////////////////////////////////////////
//					 Section [4] -  Problem Solving Approach
////////////////////////////////////////////////////////////////////////////////
// Problem Solving Steps
// [1] - Understand the Problem
// [2] - Explore Concrete Examples
// [3] - Break it Down
// [4] - Solve/Simplify
// [5] - Look Back and Refactor

///////////////////// lecture[19] - Understand The Problem
// UnderStanding The Problem [ask your self this questions]
// [1] - Can i restate the problem in my own words?
// [2] - What are the inputs that go into the problem?
// [3] - What are the outputs that should come from the solution to the problem
// [4] - Can the outputs be determined from the inputs
// [5] - How Should i label the important pieces of data are a part of the problem

///////////////////// lecture[20] - Concrete Examples
// [1] - Start with Simple Examples
// [2] - Progress to More Complex Examples
// [3] - Explore Examples with empty inputs
// [4] - Explore Examples with Invalid Inputs

// write a function which takes in a string and returns counts of each character in the string
// understnad the problem
// 1- (اكتب داله يدخل لها كلمات و تخرج عدد احرف هذه الكلمه)
// 2 - string 3- number
// Explore Concrete Examples(examples sorted from easiest to hardest)
// function charCount(arr) {
// 	// write your code here
// }
// charCount('aaaa') => {a: 4} ?
// charCount('hello') => {h: 1, e: 1, l: 2, a: 1} ?
// charCount('hello') => {a: 1, b: 0, c: 0, d: 0, ... etc  ? should the function return letter length
// charCount('hello Hi There') => {a: 1, b: 0, c: 0, d: 0, ... etc  ? does the count include upper and lowercase?
// charCount('hello Hi There my password is k@5214705K') => {a: 1, b: 0, c: 0, d: 0, ... etc  ? does the count include upper and lowercase? what about symbols like @ $ &? should i ignore them? what about numbers
// what if i put input string? what should i return
// this is the questions you should ask if you are in interview

///////////////////// lecture[21] - Break It Down

// Write the steps you need to take to slove the problem

// Exercise - write a function which takes in a string and returns counts of each character in the string

// function charCount(char) {
// 	//  make object to return at end
// 	let chars = {};
// 	// create regualr expression which checks if the string is alphanumeric
// 	let re = /[a-z\d]/i;

// 	// loop over the string, for each character
// 	for (let i = 0; i < char.length; i++) {
// 		// transform char into lowerCase
// 		const str = char[i].toLowerCase();
// 		if (re.test(str) && !chars.hasOwnProperty(str)) {
// 			// if the character a number/charcter not in the object add it and set value to one
// 			chars[str] = 1;
// 		} else if (re.test(str) && chars.hasOwnProperty(str)) {
// 			// if the character a number/charcter in the object add one to the count
// 			chars[str]++;
// 		}
// 	}
// 	// return object at end
// 	return chars;
// }

// console.log(charCount('Hello this is me and my name ! is @ khaledRRRefaat08'));

///////////////////// lecture[22] - Solve Or Simplify

// Simplify
// [1] - find the core	difficulty in what you are trying to do
// [2] - temporarily ignore that difficulty
// [3] - write a simplified solution
// [4] - then incorporate that difficulty back in

///////////////////// lecture[23] - Look Back & Refactor

// * - can you check the result?
// * - can you  undetstand it a glance?
// * - can you use the result or method for some other problems?
// * - can you improve the preformance of your solution?
// * - can you think of other ways of refactor?
// * - how have other people solved this problem?

function charCount(char) {
	let chars = {};
	for (let str of char) {
		if (isAlphaNumeric(str)) {
			str = str.toLowerCase();
			chars[str] = ++chars[str] || 1; // if chars[str] already exists then add 1 to it if not set value to 1
		}
	}
	return chars;
}
function isAlphaNumeric(char) {
	let code = char.charCodeAt(); // the defualt of charCodeAt is index[0]
	if (
		!(code > 47 && code < 58) && //numeric  (0-9)
		!(code > 64 && code < 94) && // upper alpha(A - Z)
		!(code > 96 && code < 123) // lower apha(a-z)
	)
		return false;
	return true;
}
console.log(charCount('Hello this is me and my name ! is @ khaledRRRefaat08'));
