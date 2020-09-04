////////////////////////////////////////// lecture[53] - Conceptual Aside: Classical vs Prototypal Inheritance
// // Big Word Alert - INHERITANCE: ONE OBJECT GETS ACCESS TO THE PROPERTIES AND METHODS OF ANOTHER OBJECT.
// the general idea of inheritance is implemented differemtly in differemt programming languages but our purpose we need to only understand the most basic concept. that one object get access to the properties and methods of another object

// Classsical Inheritance
// it's there in C# and Java it's a way of sharing methods and properties of objects
// the bads about it it's very verbose(مطول يعني طويله)

// Prototypal Inheritance
// Simple.  - Flexible - Extensible - easy to understand

////////////////////////////////////////// lecture[54] - Understanding the Prototype
// all objects in javascript(and that includes functions) have prototype property and the object property shortcut is proto

// const person = {
// 	firstName: 'Defualt',
// 	secondName: 'Default',
// 	getFullName: function() {
// 		return this.firstName + ' ' + this.secondName;
// 	}
// };

// const khaled = {
// 	firstName: 'Khaled',
// 	secondName: 'Refaat'
// };

// // don't do this ever! for demo purposes only!!!
// khaled.__proto__ = person;
// console.log(khaled.getFullName());

// const jane = {
// 	firstName: 'Jane'
// };

// // don't do this ever! for demo purposes only!!!
// jane.__proto__ = person;
// console.log(jane.getFullName());

////////////////////////////////////////// lecture[55] - Everything is an Object (or a primitive)

// const a = {};
// const b = [];
// const c = function() {};
// // const d = () => {};
// // var e = function() {};

// console.log(a.__proto__);
// console.log(b.__proto__);
// console.log(c.__proto__);
// // console.log(d.__proto__);
// // console.log(e.__proto__);

////////////////////////////////////////// lecture[56] - Reflection and Extend
// // Big Word Alert - REFLECTION: AN OBJECT CAN LOOK AT ITSELF, LISTENING AND CHANGING IT'S PROPRIETIES ADN METHODS
// we can use that to implement a very useful pattern called extend

const person = {
	firstName: 'Defualt',
	secondName: 'Default',
	getFullName: function() {
		return this.firstName + ' ' + this.secondName;
	}
};

const khaled = {
	firstName: 'Khaled',
	secondName: 'Refaat'
};

// don't do this ever! for demo purposes only!!!
khaled.__proto__ = person;
console.log(khaled.getFullName());
console.log('-----------------------------------');

for (let x in khaled) {
	console.log(x + ': ' + khaled[x]);
}
console.log('-----------------------------------');

const jane = {
	adress: 'El Shoun Sydlyat El Knoz Street',
	getFormalFullName: function() {
		return this.lastName + ', ' + this.firstName;
	}
};

const jim = {
	getFirstName: function() {
		return this.firstName;
	}
};

_.extend(khaled, jane, jim);

console.log(khaled);
console.log('-----------------------------------');
