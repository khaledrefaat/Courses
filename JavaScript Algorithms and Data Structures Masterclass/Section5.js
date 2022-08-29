///////////////////// lecture[27] - Frequency Counter Pattern

// Pattern Definition
// Frequency Counters
// this pattenr uses object or sets to collect values/frequencies of values
// this can often avoid the need of nested loops or O(n^2) operations with arrays/strings

// An Example
// write a fucntion that accepts 2 argument if the second argument == the first arugment square return true else reutnr false

// My Solution
// function same(arr1, arr2) {
// 	let arrr = [];
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr2.includes(arr1[i] * arr1[i]) && arr1.length === arr2.length) arrr.push(true);
// 		else arrr.push(false);
// 	}
// 	let arrValue = arrr.reduce((acc, curr) => acc + curr);
// 	if (arrValue !== arrr.length) return false;
// 	return true;
// }
// console.log(same([ 1, 2, 3, 5, 9 ], [ 1, 4, 9, 25, 81 ]));

// Colt Solution
// function same(arr1, arr2) {
// 	if (arr1.length !== arr2.length) return false;
// 	for (let i = 0; i < arr1.length; i++) {
// 		let correctIndex = arr2.indexOf(arr1[i] ** 2);
// 		if (correctIndex === -1) return false;
// 		arr2.splice(correctIndex, 1);
// 	}
// 	return true;
// }

// console.log(same([ 1, 2, 3, 5, 9 ], [ 1, 4, 9, 25, 81 ]));

// the above examples are O(N^2)

// Refactor

// this function is O(2n)
// function same(arr1, arr2) {
// 	if (arr1.length !== arr2.length) return false;

// 	// create 2 empty objects
// 	let arrObj1 = {};
// 	let arrObj2 = {};
// 	// assign the value of arr1 to arrObj1 and how many is the number repeated
// 	for (let val of arr1) {
// 		arrObj1[val] = (arrObj1[val] || 0) + 1;
// 	}
// 	// assign the value of arr2 to arrObj2 and how many is the number repeated
// 	for (let val of arr2) {
// 		arrObj2[val] = (arrObj2[val] || 0) + 1;
// 	}
// 	console.log(arrObj1);
// 	console.log(arrObj2);
// 	// check if the argument of arrObj1 is exsists in arrObj2 and if arrObj1 ^2 arrObj2
// 	for (let key in arrObj1) {
// 		if (!(key ** 2 in arrObj2)) return false;
// 		if (arrObj2[key ** 2] !== arrObj1[key]) return false;
// 	}
// 	return true;
// }

// console.log(same([ 1, 2, 3, 5, 9, 9, 9 ], [ 1, 4, 9, 25, 81, 81, 81 ]));

///////////////////// lecture[28] - Frequency Counter: Anagram Challenge

// given two strings, write a function to determine if second string is an anagram  of the first.

// my solution
// function validAnagram(str1, str2) {
// 	if (str1.length !== str2.length) return false;
// 	let strObj1 = {};
// 	let strObj2 = {};

// 	for (let string of str1) {
// 		strObj1[string] = ++strObj1[string] || 1;
// 	}

// 	for (let string of str2) {
// 		strObj2[string] = ++strObj2[string] || 1;
// 	}

// 	console.log(strObj1);
// 	console.log(strObj2);

// 	for (let key in strObj1) {
// 		// check if the key exsists in strObj2
// 		if (!(key in strObj2)) return false;
// 		if (strObj2[key] !== strObj1[key]) return false;
// 	}
// 	return true;
// }

///////////////////// lecture[29] - Anagram Challenge Solution
// colt's solution
// function validAnagram(first, second) {
// 	if (first.length !== second.length) return false;

// 	const lookup = {};

// 	for (let i = 0; i < first.length; i++) {
// 		let letter = first[i];
// 		// if letter exsists add increase it by 1 if not set the value of it to 1
// 		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
// 	}

// 	for (let i = 0; i < second.length; i++) {
// 		let letter = second[i];
// 		// if letter's value is 0 or dosent exsists return false
// 		if (!lookup[letter]) {
// 			return false;
// 		} else lookup[letter] -= 1;
// 	}
// 	return true;
// }

// console.log(validAnagram('ads', 'asd'));

///////////////////// lecture[30] - Multiple Pointers Pattern

// Pattern Definition
// Multiple Pointers
// creating pointers or values that correspond to an index or position and move towards the beggining, end or middle based on a certain condition
// very efficint for solving problems with mininmal space complexitiy as well

// An Example
// write a function called sumZero which accepts a sorted array of intergers. the function should find the first pair where the sum is 0. return an array that includes both values that sum zero or undefined if a pair does not exsist

// function sumZero(arr) {
// 	// check if the array is sorted
// 	let sum = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		let currentIndex = arr[i];
// 		let prevIndex = arr[i - 1];
// 		let lastIndex = arr[arr.length - (i + 1)];
// 		if (i > 0 && currentIndex - 1 !== prevIndex) {
// 			return 'Array Is Not Sorted';
// 		}
// 		// check if there is  pairs and return it
// 		if (currentIndex + lastIndex === 0 && arr.length / 2 > arr.length - (i + 1) && currentIndex !== lastIndex)
// 			sum.push(currentIndex, lastIndex);
// 	}
// 	// check if there is no pairs
// 	if (sum.length === 0) return undefined;
// 	return sum;
// }

// refactor using Multiple Pointers

// function sumZero(arr) {
// 	let left = 0;
// 	let right = arr.length - 1;
// 	let sumZ = [];
// 	while (left < right) {
// 		let sum = arr[left] + arr[right];
// 		if (sum === 0) return [ arr[left], arr[right] ];
// 		else if (sum > 0) {
// 			right--;
// 		} else left++;
// 	}
// 	return sumZ;
// }

// console.log(sumZero([ -3, -2, -1, 0, 1, 2, 3 ]));

///////////////////// lecture[31] -  Multiple Pointers: Count Unique Values Challenge

// Implement a function called countUniqueValues, which accepts a sorted array, and count the uinque values in the array. there can be negative numbers in the array, but it always be sorted

// function countUniqueValues(arr) {
// 	let left = 0;
// 	let right = arr.length - 1;
// 	let obj = {};
// 	for (let x in arr) {
// 		let current = arr[x];
// 		obj[current] ? (obj[current] += 1) : (obj[current] = 1);
// 	}
// 	return Object.keys(obj).length;
// }

// refactor

// function countUniqueValues(arr) {
// 	let Unique = [];
// 	for (let x in arr) {
// 		let pointer = x - 1;
// 		let current = arr[x];
// 		if (x !== 0 && current !== arr[pointer]) Unique.push(current);
// 	}
// 	return Unique.length;
// }

// console.log(countUniqueValues([ 1, 2, 3, 3, 3, 4, 4, 4, 5 ]));

///////////////////// lecture[32] -  Count Unique Values Solution

// Colt's Solution
// function countUniqueValues(arr) {
// 	if (arr.length === 0) return 0;
// 	let j = 0;
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[j] !== arr[i]) {
// 			j++;
// 			arr[j] = arr[i];
// 		}
// 	}
// 	return j + 1;
// }
// console.log(countUniqueValues([ 1, 2, 3, 3, 3, 4, 4, 4, 5 ]));

///////////////////// lecture[33] -  Sliding Window Pattern

// Pattern Definition
// this pattern involves creating a window which can be either be an array or number from one position to another. depending on a cerian condition the window either increses or closes (and a new window is created). very useful of keeping track of subset of data in an array/string etc

// An Example
// write a function called maxSubarraySum which accepts an array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in the array

// function maxSubarraySum(arr, num) {
// 	let maxSum = 0;
// 	let tempSum = 0;
// 	if (arr.length < num) return null;
// 	for (let i = 0; i < num; i++) {
// 		maxSum += arr[i];
// 	}
// 	tempSum = maxSum;
// 	for (let i = num; i < arr.length; i++) {
// 		// الفكره هنا ان بدل ما ارجع و اجمع كل النواتج من الرقم التاني  - الانديكس الي بعده - لا بطرح الاندكس الي الاري بدات منه و بجمع الاندكس الجديد الي الاري هتوصلو (صداع من كتر العظمه)
// 		tempSum = tempSum - arr[i - num] + arr[i];
// 		maxSum = Math.max(maxSum, tempSum);
// 	}
// 	return maxSum;
// }

// console.log(maxSubarraySum([ 2, 6, 9, 1, 5, 4 ], 3));

///////////////////// lecture[33] - Divide And Conquer Pattern

// Pattern Definition

// This Pattern Involves Dividing a data set into smaller chunks and then repeating a process with a subset of data. this pattern can tremendously decrease time tomplexity

// this pattern will be used alot in searching algorthimis
