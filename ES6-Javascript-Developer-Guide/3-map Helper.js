///////////////////////////////////////////////////////////
// lecture [3] - The Map Helper
// const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

// write a function too loop over the numbers array and double the values
// we are writing it into newArray to not mutate the old one thats a good practice and less errors

// es5
// function es5(arr) {
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		newArr.push(arr[i] * 2);
// 	}
// 	return newArr;
// }

// // es6 but with the forEach helper
// function es6Foreach(arr) {
// 	let newArr = [];
// 	arr.forEach((cur) => newArr.push(cur * 2));
// 	return newArr;
// }

// // es6 map helper
// function es6Map(arr) {
// 	// keep in mind that you should always use return on map else it would return null
// 	let newArr = arr.map((cur) => cur * 2);
// 	return newArr;
// }

// console.log(es5(numbers));
// console.log(es6Foreach(numbers));
// console.log(es6Map(numbers));

///////////////////////////////////////////////////////////
// lecture [3] - The Map Helper Continued

// const cars = [
// 	{ model: 'bmw', price: 'expensive' },
// 	{ model: 'mercedes', price: 'expensive' },
// 	{ model: 'fiat', price: 'cheap' }
// ];

// let models = cars.map((cur) => cur.model);

// console.log(models);

///////////////////////////////////////////////////////////
// lecture [4] - Where Map Is Used
// map is by far one of the most commonly array helpers for frontend web development
// you can use map to render data like posts likes comments like facebook twitter  etc
