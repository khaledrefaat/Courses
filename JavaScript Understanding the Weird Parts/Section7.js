////////////////////////////////////////// lecture[65] - Initialization

// this is a useful way to setup some data quickly and it called Initialization
// const people = [
// 	{
// 		// Khaled Object
// 		firstName: 'Khaled',
// 		lastName: 'Refaat',
// 		adress: [ 'elshoun', 'faw' ]
// 	},
// 	{
// 		// Tarek Object
// 		firstName: 'Tarek',
// 		lastName: 'Refaat',
// 		adress: [ 'elshoun', 'faw' ]
// 	},
// 	function greet(name) {
// 		console.log('hey ' + name);
// 	}
// ];

////////////////////////////////////////// lecture[66] - 'typeof' , 'instanceof', and Figuring Out What Something Is

// let a = 5;
// let b = 'hello';
// let c = {};
// let d = [];
// let s = function() {};
// function Person(firstname, lastname) {
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// }

// Person.prototype.greet = function() {
// 	return 'Hey ' + this.firstname + this.lastname;
// };

// let khaled = new Person('Khaled', 'Refaat');

// console.log(typeof a); // expected output => Number
// console.log(typeof b); // expected output => String
// console.log(typeof c); // expected output => Object
// console.log(typeof d); // expected to output =>  object so to check the array typeof we will turn it to string
// console.log(d.toString()); // expected to output => ' ' so we will say hey take my array and go deeper in the prototype chain
// console.log(Object.prototype.toString.call(d)); // expected output => [Object Array]
// console.log(typeof s); // expected output => Function
// console.log(typeof Person); // expected output => Function
// console.log(typeof khaled); // expected output => Object
// console.log(khaled instanceof Person); // expected output => True
// console.log(typeof null); // expected output => Object

////////////////////////////////////////// lecture[67] - Strict Mode
// use strict tells that dont create a variable without const - let - var
'use strict'; // try to comment this line and check the console.log result
// we can call it in the top of the file so it will work on the wole file or just in a function so it will work just this function
let person;
persommm = {};
console.log(persommm); // in case of 'use strict' commented expected out put => {} if it's not commented it will give error
