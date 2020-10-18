///////////////////////////////////////////////////////////
// lecture [1] - Array Helper Methods
// [forEach, map, filter, find, every, some, reduce]
// this helper methods stephen says that they are very important that they even on of the most important things to learn
// in this whole section we will just talk about forEach
// this array helpers to not use for loops

///////////////////////////////////////////////////////////
// lecture [2] - The forEach Helper

// to get started we will start by writing a Es5 code

// var colors = [ 'red', 'green', 'blue', 'white' ];

// function loopEs5(arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		console.log(arr[i]);
// 	}
// }

// const loopEs6 = (arr) => arr.forEach((cur) => console.log(cur));

// console.log(loopEs5(colors));
// console.log(loopEs6(colors));

///////////////////////////////////////////////////////////
// lecture [3] - forEach Continued

// // Create an array of numbers
// let numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

// // Create variable to hold the sum
// let sum = 0;

// // Loop over the array, incrementing the sum variable
// const adder = (num) => (sum += num);
// numbers.forEach(adder); // call the adder with numbers current element

// // print the sum variable
// console.log(sum);

///////////////////////////////////////////////////////////
// lecture [4] - Why use forEach
// when we should look and use forEach
// the forEach is swiss army knife(سكينه ليها استخدامات كتير)every other helper could be reimplemented with forEach
// imagine a gmail spam folder and you want to delete all selected emails
// emails.forEach(cur => deleteEmail(cur))
// or if you want to call a method with different argument everytime consider forEach
