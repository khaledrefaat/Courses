////////////////////////////////////////// lecture[19] - Conceptual Aside: Types and Javascript

// Big Word Alert - Dynamic Typing:
// you don't tell the engine what type of data the variable holds, it figures it out while your code is runing

////////////////////////////////////////// lecture[20] - Primitive Types

// Big Word Alert - Primitive Types:
// a type of data that represents a single value a they are 6 in javascript
// [1] Undefined - undefined represents lack of existence and that's why javascript engine sets variable to initially and it will stay undefined untill you set the variable to a value(so you shouldnt set a variable to this)
// let test;
// console.log(test);
// [2] Null - null also represents lack of exsistence (you can set a variable to this)
// [3] Boolean - True or False
// [4] Number - Floating point number (there's always some decimals). unlike other programming languages, there's only one 'number' type...and it can make math weird
// [5] String - a sequence of characters(both "" and '' can be used)
// [6] Symbol - ES6

////////////////////////////////////////// lecture[21] - Conceptual Aside: Operators

// Big Word Alert - Operator:
// a special function that is syntactically(نحويا)(written) differently. genrally, operators take two parameters and return one result

// let s = 4 + 4; // how can javascript knew that i wanna calculate the result of 4 + 4 (operators)
// console.log(s);
// what happens under thehood is javascript and other many programming language gives you ability to write something called infix notation and that's points to operators and this is a function call the plus sign is a function it would be like +(4, 4)

////////////////////////////////////////// lecture[22] - Operator Precedence and Associativity

// Big Word Alert - Operator Precedence:
// which operator function gets called first. functions are called in orderd of precedence, higher precedence wins

// Big Word Alert - Associativity:
// what order functions get called in: left to right or right to left. when functions have the same precedence

// let x = 5 + 5 * 10; // it's about operators precedence so the multiplication functions run first then the addition function second
// console.log(x);

// if the operators have the same precedence and the decision will be up to associativity which functions runs first
// let x = 5,
// 	s = 10,
// 	y = 15;
// x = s = y; // when assignment operator runs it returns a value example(x = y => 15)
// console.log(x);
// console.log(s);
// console.log(y);

////////////////////////////////////////// lecture[23] - Conceptual Aside: Coercion

// Big Word Alert - Coercion:
// Converting a value from one type to another. this happens quite often in javascript because it's dynamically typed

// let x = 1 + '2';
// console.log(x);

////////////////////////////////////////// lecture[24] - Comparison Operators

// console.log(1 < 2 < 3); // expected value [true]
// console.log(3 < 2 < 1); // expected value [true] too!!!!!!!!!! why
// the first console.log() expected to return true but the second acts weird! no it dosent as i know from previous lessons
// that operators is functions and they take two values and returns one so what is really happening is
// console.log(3 < 2 < 1) => console.log(false < 1) => true

// let a = 1;
// let x = true;
// console.log(a == x); // in this one javascript coercion (true) into number that's why always try to use the ===
// console.log(a === x); // here javascript dosent coercion (true) into a number

////////////////////////////////////////// lecture[25] - Existence and Booleans

// let a;
// a = '';
// a = null;
// a = 5;
// if (a) console.log('a is true'); // if always coercion what inside the () to boolean

////////////////////////////////////////// lecture[26] - Default Values

// function greet(name) {
// 	name = name || 'Please Enter Your Name!'; // what Or operator(||)  does is returning the coercion of true
// 	// name = false || true => it will return the coercion of the true value
// 	console.log('Hello ' + name);
// }

// greet('');

////////////////////////////////////////// lecture[27] - Framework Aside: Default Values

// when import libiraries or framework it actually dosent split into alot of files no javascript loads it as it was a single file
// if we did create 3 files as javascript and import it in html like app.js app1.js app2.js and inside the app1 or app2 we created a variable we can acsess it inside the orignal app.js too if it was in the bottom of the import stack
