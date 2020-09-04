////////////////////////////////////////// lecture[30] - Objects and the Dot

// let person = new Object();

// person['FirstName'] = 'Khaled';
// person['LastName'] = 'Refaat';

// let first = 'FirstName';

// person['Adress'] = new Object();
// person['Adress']['Build'] = '101';
// person.Adress.Stone = '105';

// console.log(person['Adress']['Build']);
// console.log(person);

////////////////////////////////////////// lecture[31] - Objects and Object Literals

// this is what Object literals means {} this curly braces is the object literals
// let person = {
// 	firstName: 'Khaled',
// 	lastName: 'Refaat',
// 	age: () => {
// 		return new Date().getFullYear() - 1999;
// 	}
// };

// function introduction(name, age) {
// 	console.log(`Hey There My Name Is ${name} And I'm ${age} Years Old.`);
// }

// introduction(person.firstName, person.age());
// introduction({ firstName: 'khaled', lastName: 'refaat' }, person.age());

////////////////////////////////////////// lecture[32] - Framework Aside: Faking Namespaces

// Big Word Alert - NameSpace: A Container for variables and functions
// Typically to keep variables and functions with the same name spearate - here is the problem javascript dosent have name spacses, like other programming languages, you will see that, because the nature of objects we dont need namespacses as a feature we can fake it

////////////////////////////////////////// lecture[33] - JSON and Object Literals

// Json stands for - JavaScript Object Notation - and it's inpired by javascript object literal but they are not the same
// javascript Object
// let objectLiteral = {
//     firstName: 'Khaled',
//     isAProgrammer: true
// }

// Json - Anything other bolleans must be inside double quotes -
// {
//     "firstName": "Khaled",
//     "IsAProgrammer": true
// }

////////////////////////////////////////// lecture[34] - Functions are Objects
// Big Word Alert - First Class Functions: everything you can do with other types you can do with functions - assaign them to a variables, pass them around as parameters, create them on the fly.

// function greet(name) {}
// greet.len = 7;
// console.log(greet.len);

////////////////////////////////////////// lecture[35] - Function Statements and Function Expressions
// Big Word Alert - Expression is a unit of code that results in a value - it dosen't have to save to a variable

// what is an expression => expression returns a value
// function expression
// const anonymousGreet = (name) => {
// 	console.log('Hello ' + name);
// };
// anonymousGreet('Khaled');

// // functions statment
// greet(() => {
// 	return true;
// });
// function greet(name) {
// 	console.log(name); // here i'm telling the code to print the functions
// 	console.log(name()); // here i'm telling it to run the function not to print the syntax
// }

////////////////////////////////////////// lecture[36] - Conceptual Aside: By Value vs By Reference
// Big Word Alert - Mutate: to change something - "Immutable" means it can't be changed

// pass by value(primitives)
// let a = 5;
// let b = a;
// a = 7;
// console.log(a);
// console.log(b);

// pass by reference(objects) - all objects interact by reference(including functions)
// let obj = {
// 	name: 'khaled'
// };
// let obj1 = obj;
// obj.name = 'refaat'; // this is mutate(change the value of it)
// console.log(obj.name);
// console.log(obj1.name);

// // pass by reference(even as parameters)
// function changeGreetings(obj) {
// 	obj.name = 'Elkady'; // mutate
// }
// changeGreetings(obj1);
// console.log(obj.name);
// console.log(obj1.name);

// // equals operator(=) sets up a new memory space (new adress)

// obj1 = { name: 'khaled' };
// console.log(obj.name);
// console.log(obj1.name);

////////////////////////////////////////// lecture[37] - Objects, Functions, and 'this'
// const obj = {
// 	firstName: 'Khaled',
// 	lastName: 'Refaat',
// 	method: function() {
// 		return this.firstName;
// 	}
// };
// console.log(obj.method());

// let fun = () => {
// 	let ss = 55;
// 	this.newVariable = '556';
// };

// function funs() {
// 	let ss = 55;
// 	this.newVariable1 = '556';
// }
// fun();
// funs();
// console.log(newVariable);
// console.log(newVariable1);

////////////////////////////////////////// lecture[38] - Conceptual Aside: Arrays - Collections of Anything
// the lesson jusy saying that arrays can hold anytype of data like this array
// let arr = [
// 	5,
// 	true,
// 	{
// 		firstName: 'khaled'
// 	},
// 	function greet(name) {
// 		return 'Hello ' + name;
// 	},
// 	'this is string'
// ];
// console.log(arr);
// console.log(arr[3]('khaled'));

////////////////////////////////////////// lecture[39] - 'arguments' and spread
// Big Word Alert - THE PARAMETERS YOU PASS TO A FUNCTIONS - Javascript gives you a keyword of the same name which contains them all.

// function greet(firstname, lastname = 'Refaat', age, ...other) {
// 	// this is es6 to put default parameter
// 	// and the es6 of the arguments is the spread operator like (...other) it means if there is more arguments put them on array in name of other
// 	firstname = firstname || 'Khaled'; // this is es5 to put default parameter
// 	console.log('First Name Is ' + firstname);
// 	console.log('Last Name Is ' + lastname);
// 	console.log('Age Is ' + age);
// 	console.log(arguments); // arguments is javascript special thing that javascript engine sets up it acts like array but it's not array
// 	console.log('------------------------');
// 	console.log(other);
// }
// greet(); // and this is weird in javascript i can call the function without any parametere and that's because of the hoisting
// // greet('Khaled', 'Refaat', 21);

// greet('Khaled'); // here the hoisting attach the name to the first parameter
// greet('Khaled', 'Refaat'); // so as we can se we can skip passing the parameters and we can pass part of it not all of the parameters
// greet('Khaled', 'Refaat', 21);
// greet('Khaled', 'Refaat', 21, 88, 55, 66);

////////////////////////////////////////// lecture[40] - Framework Aside: Function Overloading

// the lecture about something other programming language have and javascript dosent and it's function overloading
// and this is making functions with the same name but with different parameters and this dosen't work in javascript because functions in javascript are objects and thanks for javascript function firstclass we have alot of alternative like this one

// function greet(firstname, lastname, language = 'en') {
// 	if (language === 'en') console.log('Hello ' + firstname + ' ' + lastname);
// 	else if (language === 'ar') console.log('السلام عليكم ' + firstname + ' ' + lastname);
// }

// function greetEnglish(firstname, lastname) {
// 	greet(firstname, lastname, 'en');
// }

// function greetArabic(firstname, lastname) {
// 	greet(firstname, lastname, 'ar');
// }

// greetEnglish('Khaled', 'Refat');
// greetArabic('Khaled', 'Refat');

////////////////////////////////////////// lecture[41] - Conceptual Aside: Syntax Parsers
// remeber that the code you write dosent go directly to the computer but ther's that intermediate program between your code and the computer that translates your code into something that the computer can understand the Javascript engine on your browser do something like that and it has different aspects and elements to it, one of them the syntax parser. which reads your code and determines if it's valid

////////////////////////////////////////// lecture[42] - Dangerous Aside: Automatic Semicolon Insertion
// this is the first DANGEROUT ASIDE(AUTOMATION SEMICOLON INSERTION)
// rule[1] - you should always put your own semicolon because you dont want javascript engine does this for you
// function getPesron() {
// 	return
// 	{
// 		firstName: 'khaled'
// 	}
// }

// console.log(getPesron())

////////////////////////////////////////// lecture[43] - Framework Aside: Whitespace
// Big Word Alert - WHITESPACE: INVISIBLE CHARACTERS THAT CREAT LITERAL 'SPACE' IN YOUR WRITTEN CODE - Carriage returns, tabs, spaces

////////////////////////////////////////// lecture[44] - Immediately Invoked Functions Expressions (IIFEs)
// IIFE is short cut for => Immediately invoked function expression
// let firstName = 'Khaled';
// // es5 IIFE
// (function(name) {
// 	console.log('hey ' + name);
// 	var s = 5;
// })(firstName);
// // console.log(s);
// // es6 IIFE
// {
// 	function ssd(name) {
// 		console.log('hey ' + name);
// 	}
// 	ssd(firstName);
// 	let s = 5;
// }
// console.log(s);

////////////////////////////////////////// lecture[45] - Framework Aside: IIFEs and Safe Code

// let's take a look at what happening behind the scene
// (function(name) {
// 	let greeting = 'Hello';
// 	console.log(greeting + ' ' + name);
// })('Khaled');
// let's think about our execution stack when the code runs the IIFE runs in a Excution stack alone for the anonymous function so it dosent touch the global in environment

////////////////////////////////////////// lecture[46] - Understanding Closures
// Vital(very important) Topic to understand
// Closures Definition - taken from javasScript Complete bot camp 2020 - An inner function has always access to the variables and parameters of it's outer function, even after the outer function has returned.

// function greet(whattosay) {
// 	return function(name) {
// 		console.log(whattosay + ' ' + name);
// 	};
// }
// let sayHi = greet('Hey');
// sayHi('Khaled');

////////////////////////////////////////// lecture[47] - Understanding Closures - Part 2

// function buildFunctions() {
// 	var arr = [];
// 	for (var i = 0; i < 3; i++) {
// 		// the es6 resolve this problem just replace var with let
// 		arr.push(function() {
// 			console.log(i);
// 		});
// 	}
// 	return arr;
// }

// var fs = buildFunctions();
// fs[0]();
// fs[1]();
// fs[2]();

// function buildFunctions() {
// 	var arr = [];
// 	for (var i = 0; i < 3; i++) {
// 		// the es6 resolve this problem just replace var with let
// 		arr.push(
// 			(function(j) {
// 				return function() {
// 					// the point here that IIFE will return a value and our code looking for a function so we return a function
// 					console.log(j);
// 				};
// 			})(i)
// 		);
// 	}
// 	return arr;
// }

// var fs = buildFunctions();
// fs[0]();
// fs[1]();
// fs[2]();

////////////////////////////////////////// lecture[48] - Framework Aside: Function Factories

// function makeGreeting(language) {
// 	return function(firstname, lastname) {
// 		if (language === 'en') console.log('Hello ' + firstname + ' ' + lastname);
// 		else if (language === 'es') console.log('Hola ' + firstname + ' ' + lastname);
// 	};
// }

// let englishGreet = makeGreeting('en');
// let spanishGreet = makeGreeting('es');
// englishGreet('Khaled', 'Refaat');
// spanishGreet('Khaled', 'Refaat');

////////////////////////////////////////// lecture[49] - Closures and Callbacks
// Big Word Alert - CALLBACK FUNCTION: A FUNCTION YOU GIVE TO ANOTHER FUNCTION, TO BE RUN WHEN THE OTHER FUNCTION IS FINISHED - So the function you call(i.e.invoke), 'calls back' by calling the function you gave it when it finishes

// function hiLater() {
// 	let greeting = 'Hey!';

// 	setTimeout(function() {
// 		console.log(greeting);
// 	}, 2000);
// }
// hiLater(); // here we are using clousers as the hiLater function finishes but after 2sec the setTimeout still have acsess to it

// function tellMeWhenDone(callback) {
// 	let a = 1000; // some work
// 	let b = 2000; // some work
// 	callback();
// }

// tellMeWhenDone(function() { //
// 	console.log("Hey There i'm done here!");
// });

// tellMeWhenDone(function() {
// 	console.log("i'm done");
// });

////////////////////////////////////////// lecture[50] - call(), apply(), and bind()

// const person = {
// 	firstName: 'Khaled',
// 	lastName: 'Elkady',
// 	getFullName: function() {
// 		const fullname = this.firstName + ' ' + this.lastName;
// 		// const fullname = `${this.firstName} ${this.lastName}`;
// 		return fullname;
// 	}
// };

// console.log(person.getFullName());

// const logName = function(lang1, lang2) {
// 	console.log('Logged: ' + this.getFullName());
// 	console.log('Arguments ' + lang1 + ' ' + lang2);
// 	console.log('-----------------------------');
// }.bind(person); // this make connections between the person object and the function throw the bind function

// logName();

// const logPersonName = logName.bind(person); // bind makes copy of the function

// logPersonName('en');

// logName.call(person, 'en', 'es'); // call excutes the function the first arguemnt what you connect to the function and the rest ar arguments
// logName.apply(person, [ 'en', 'es' ]); // apply do the same as call the only different is apply accepts arguments as array

// // i also can create the function on the fly as IIFE and invoke it using apply or call like this

// (function(lang1, lang2) {
// 	console.log('Logged: ' + this.getFullName());
// 	console.log('Arguments ' + lang1 + ' ' + lang2);
// 	console.log('-----------------------------');
// }.call(person, 'en', 'es'));

// // let's talk now will i ever use this in real life?
// // function borrowing
// const person2 = {
// 	firstName: 'Khaled',
// 	lastName: 'Refaat'
// };

// console.log(person.getFullName.apply(person2));

// // function currying
// // Big Word Alert - FUNCTION CURRYING: CREATING A COPY OF A FUNCTION BUT WITH SOME PRESET PARAMETERS - Very useful in mathematical situations

// function multiply(a, b) {
// 	return a * b;
// }

// const multiply2 = multiply.bind(this, 8, 8); // here i'm setting the value of a to 2
// console.log(multiply2(5, 5)); // and here im giving the function the value of b

////////////////////////////////////////// lecture[51] - Functional Programming

// this is example of function programming
// function mapForEach(arr, fn) {
// 	let newArr = [];
// 	for (let x in arr) {
// 		let curr = arr[x];
// 		newArr.push(fn(curr));
// 	}
// 	return newArr;
// }

// function arrMultiply(item) {
// 	return item * 2;
// }

// let arr1 = [ 1, 2, 3 ];

// // console.log(mapForEach(arr1, arrMultiply));

// let checkPastLimit = function(limiter, item) {
// 	return item > limiter;
// };

// function limiter(limit) {
// 	return checkPastLimit.bind(this, limit);
// }

// let arrCheck = mapForEach(arr1, limiter(1));

// console.log(arrCheck);

////////////////////////////////////////// lecture[52] - Functional Programming Part 2
// check out the underscore library code and lodash code
