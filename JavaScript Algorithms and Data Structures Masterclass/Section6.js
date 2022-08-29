///////////////////// Coding Exercise 3: frequency counter - sameFrequency
// write a function called sameFrequency. given two positive integers, find out if the two numbers have the same frequency of digits

// function sameFrequency(num1, num2) {
// 	let n1 = num1.toString();
// 	let n2 = num2.toString();
// 	if (n1.toString().length !== n2.toString().length) return false;
// 	let obj1 = {};
// 	let obj2 = {};

// 	for (let x in n1) {
// 		let current = n1[x];
// 		obj1[current] ? obj1[current]++ : (obj1[current] = 1);
// 	}

// 	for (let y in n2) {
// 		let current = n2[y];
// 		obj2[current] = ++obj2[current] || 1; // another way of doing the same thing
// 	}

// 	for (let key in obj1) {
// 		if (!(key in obj2)) return false;
// 		if (obj1[key] !== obj2[key]) return false;
// 	}

// 	return true;
// }

// console.log(sameFrequency(5151513, 5151513));

///////////////////// Coding Exercise 4: frequency counter - Multiple Pointers - are thereduplicates
// implement a function called, areThreeDuplicates which accepts a variable number of arguments, and checks wether there are any duplicates among

// frequency counter solution
// function areThreeDuplicates() {
// 	let obj = {};
// 	for (let val in arguments) {
// 		let current = arguments[val];
// 		obj[current] ? obj[current]++ : (obj[current] = 1);
// 	}

// 	for (let key in obj) {
// 		if (obj[key] > 1) return true;
// 	}
// 	return false;
// }

// console.log(areThereDuplicates(1, 2, 5, 8, 9, 4, 5));

///////////////////// Coding Exercise 5: Multiple Pointers - AveragePair

// write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. there may be more than one pair that matches the average target,

// function averagePair(arr, av) {
// 	if (arr.length < 3) return false;
// 	let start = 0;
// 	let next = 1;
// 	for (let x in arr) {
// 		let curr = arr[x];
// 		let average = (arr[start] + arr[next]) / 2;
// 		if (average === av) {
// 			return true;
// 		}
// 	}
// }

// function averagePair(arr, num) {
// 	if (arr.length < 3) return false;
// 	let start = 0;
// 	let end = arr.length - 1;
// 	while (start < end) {
// 		let avg = (arr[start] + arr[end]) / 2;
// 		if (avg === num) {
// 			return true;
// 		} else if (avg < num) start++;
// 		else end--;
// 	}
// 	return false;
// }
// console.log(averagePair([ 1, 3, 3, 5, 6, 7, 10, 12, 19 ], 8));

///////////////////// Coding Exercise 6: Multiple Pointers - IsSubsequence

// Write a function called  isSubsequence  which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// my solution
// function isSubsequence(str1, str2) {
// 	let arr1 = str1.split('');
// 	let arr2 = str2.split('');

// 	for (let x in ar1) {
// 		let current = ar1[x];
// 		if (!arr2.includes(current)) return false;
// 	}
// 	return true;
// }

// colt solution
// function isSubsequence(str1, str2) {
// 	let i = 0;
// 	let j = 0;
// 	if (!str1) return true;

// 	while (j < str2.length) {
// 		if (str1[i] === str2[j]) i++;
// 		if (i === str1.length) return true;
// 		j++;
// 	}
// 	return false;
// }

// console.log(isSubsequence('sing', 'string'));

///////////////////// Coding Exercise 7: Sliding Window - MaxSubarraySum

// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// function maxSubarraySum(arr, num) {
// 	if (arr.length < num) return null;
// 	let sum = 0;
// 	let maxSum = 0;
// 	for (let i = 0; i < num; i++) {
// 		sum += arr[i];
// 	}
// 	maxSum = sum;
// 	for (let i = num; i < arr.length; i++) {
// 		sum = sum - arr[i - num] + arr[i];
// 		maxSum = Math.max(maxSum, sum);
// 	}
// 	return maxSum;
// }
// console.log(maxSubarraySum([ 3, -2, 7, -4, 1, -1, 4, -2, 1 ], 2));

///////////////////// Coding Exercise 8: Sliding Window - MinSubArrayLen

// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
//  This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// function minSubArrayLen(nums, sum) {
// 	let total = 0;
// 	let start = 0;
// 	let end = 0;
// 	let minLen = Infinity;

// 	while (start < nums.length) {
// 		// if current window doesn't add up to the given sum then
// 		// move the window to right
// 		if (total < sum && end < nums.length) {
// 			total += nums[end];
// 			end++;
// 			// total = 8, end = 4
// 			//  total = 6, end = 4
// 			// total = 10, end = 5
// 		} else if (total >= sum) {
// 			// if current window adds up to at least the sum given then
// 			// we can shrink the window
// 			minLen = Math.min(minLen, end - start);
// 			total -= nums[start];
// 			start++;
// 		} else {
// 			// current total less than required total but we reach the end, need this or else we'll be in an infinite loop
// 			break;
// 		}
// 	}
// 	return minLen === Infinity ? 0 : minLen;
// }
// console.log(minSubArrayLen([ 2, 3, 1, 2, 4, 3 ], 7));

///////////////////// Coding Exercise 9: Sliding Window - FindLongestSubstring

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// function findLongestSubstring(str) {
// 	if (str.length === 0) return 0;
// 	let obj = {};
// 	let longest = 0;
// 	let start = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		let curr = str[i];
// 		if (obj[curr]) start = Math.max(start, obj[curr]);
// 		longest = Math.max(longest, i - start + 1);
// 		obj[curr] = i + 1;
// 	}
// 	return longest;
// }

// console.log(findLongestSubstring('longestsubstring'));
