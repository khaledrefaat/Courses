////////////////////////////////////////// lecture[57] - Function Constructors, 'new', and the History of Javascript
// Big Word Alert - FUNCTION CONSTRUzCTORS: A NORMAL FUNCTION THAT IS USED TO CONSTRUCT OBJECTS. the 'This' variable points to a new empty object, and that object is returned from the function automatically

// function Constructors are just normal functions the new keyword dosent change how they work
// function Person(firstName, lastName, salary) {
// 	console.log(this);
// 	this.firstName = firstName || 'Khaled';
// 	this.lastName = lastName || 'Elkady';
// this.firstName = firstName ? firstName : 'Khaled';
// this.lastName = lastName ? lastName : 'Elkady';

// 	this.salary = salary - 500;
// 	console.log('i was invoked');
// }
// the new operator creats a new object turn the direction of constructor function this keyword into the new object
// let name = new Person('Khaled', 'Refaat', 5000);
// console.log(name);

////////////////////////////////////////// lecture[58] - Function Constructors and '.prototype'

// function Person(firstName, lastName, salary) {
// 	console.log(this);
// 	this.firstName = firstName || 'Khaled';
// 	this.lastName = lastName || 'Elkady';
// this.firstName = firstName ? firstName : 'Khaled';
// this.lastName = lastName ? lastName : 'Elkady';

// 	this.salary = salary - 500;
// 	console.log('i was invoked');
// 	this.getFormalName = function() {
// 		return this.firstName + ', ' + this.lastName;
// 	};
// }
// the new operator creats a new object turn the direction of constructor function this keyword into the new object
// let name = new Person('Khaled', 'Refaat', 5000);
// console.log(name);

// Person.prototype.getFullName = function() {
// 	return this.firstName + ' ' + this.lastName;
// };

// console.log(name);
// console.log(name.getFormalName());
// console.log(name.getFullName()); // we should always make mthods as prototype not putting it inside the function constructor because it will be just added once if the method inside the constructor and we have 1000 of new constructor objects the method will be copied 1000 times to the new functions too check this console.log to understand if you didint

////////////////////////////////////////// lecture[59] - Dangerous Aside: 'new' and functions

// function Person(firstName, lastName, birthDate) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.birthDate = birthDate;
// }

// Person.prototype.calcAge = function() {
// 	const year = new Date().getFullYear();
// 	return year - this.birthDate;
// };

// // const khaled = new Person('Khaled', 'Refaat', 1999);
// // console.log(khaled.calcAge());

// // if we didint add the new keyword that means we are trying to excute the Person function like a normal function
// const khaled = Person('Khaled', 'Refaat', 1999);
// console.log(khaled);
// console.log(khaled, calcAge());

////////////////////////////////////////// lecture[60] - Conceptual Aside: Built-In Function Constructors
// this lecture is about addint prototype and inheritance
// String.prototype.isGreaterThan = function(limit) {
// 	console.log(this); // this here refers to the string length
// 	return this.length > limit;
// };

// console.log('Hey'.isGreaterThan(1));

////////////////////////////////////////// lecture[61] - Dangerous Aside: Built-In Function Constructors
// it's dangerous to use built in function constructors for primitives
// let a = 3;
// let b = new Number('3'); // expected to output true, false
// console.log(a == b);
// console.log(a === b);

// you can use them without the new keyword
// let a = 3;
// let b = Number('3'); // expected to output true, true
// console.log(a == b);
// console.log(a === b);

////////////////////////////////////////// lecture[62] - Dangerous Aside: Arrays and for..in

// Array.prototype.customTest = 'Test Test Test';

// let brothers = [ 'Reham', 'Tarek', 'Khaled', 'Haytham' ];

// for (let x in brothers) {
// 	console.log(x + ' : ' + brothers[x]);
// expected output
// 0 : Reham
// 1 : Tarek
// 2 : Khaled
// 3 : Haytham
// customTest : Test Test Test

// that's why don't ever use let in loop in arrays just use it in objects
// }

////////////////////////////////////////// lecture[63] - Object.create and Pure Prototypal Inheritance
// Big Word Alert - POLYFILL: CODE THAT ADDAS A FEATURE WHICH THE ENGINE MAY LACK.

// if the browser dosen't support object.create then add it to the browser;
// if (!Object.create) {
// 	Object.create = function(o) {
// 		if (arguments.length > 1) {
// 			throw new Error('Object.create Implementation' + ' only accepts the first parameter.');
// 		}
// 		function F() {}
// 		F.prototype = o;
// 		return new F();
// 	};
// }

// const person = {
// 	firstName: 'Default',
// 	lastName: 'DefaultParent',
// 	greet: function() {
// 		return 'Hi ' + this.firstName;
// 	}
// };

// const khaled = Object.create(person);
// console.log(khaled);
// console.log(khaled.firstName);
// console.log(khaled.greet());
// console.log('---------------------------------');

// khaled.firstName = 'Khaled';
// khaled.lastName = 'Refaat';
// console.log(khaled);
// console.log(khaled.firstName);
// console.log(khaled.greet());
// console.log('---------------------------------');

////////////////////////////////////////// lecture[64] - ES6 and Classes
// Big Word Alert - SYNTACTIC SUGAR: A DIFFERENT WAY TO TYPE SOMETHING THAT DOES CHANGE HOW IT WORKS UNDER THE HOOD

// classes in javascript is just objects
class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	greet() {
		return 'Hey ' + this.firstname;
	}
}
console.log(Person);
let khaled = new Person('Khaled', 'Refaat');
console.log(khaled);
console.log(khaled.greet());
console.log('----------------------------------');

class Student extends Person {
	constructor(firstname, lastname, faculty) {
		super(firstname, lastname);
		this.faculty = faculty;
	}

	studentGreet() {
		return this.firstname + ' ' + this.lastname + ' Is Our New Student In Faculty Of ' + this.faculty;
	}
}
console.log(Student);
let stKhaled = new Student('Khaled', 'Refaat', 'Law');
console.log(stKhaled.studentGreet());
