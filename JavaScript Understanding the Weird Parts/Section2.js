/* ****************** Big Word Alert ********************* */
// Syntax Parser Is:
/* 
    A Program that reads your code and dettermines white it does and if its grammar is valid
*/
// Lexical Environment Is:
/* 
    Where something sits physically in the code you write
*/

// Execution Context Is:
/* 
    A Wrapper to help manage the code that is running
 */

// Name/Value Pair Is:
/* 
 a name Which Maps To A Unique Value
 the name may be defined more than once, but only can have one value in any given context.
 that value may be more name/value pairs
*/

// Single Thread:
/* 
    One command is being excuted at a time
    under the hood of the browser, maybe not
*/

// Invocation
/* 
    Runing a function
    in Javascript, by using parenthesis()
*/

// Variable Environment
/* 
    Where The Variable Live
    and how they relate with each other in memory 
*/

/* ************************* Lecture 7 *************************** */

// Object Is :
/* 
    A Collection Of Name Value Pairs
*/

/* ************************* Lecture 8 *************************** */

// any global code is attached to the window try this window.b() or window.a

/* const a = 'Hello World!';

function b() {
    return "Hello World!"
} */

// console.log(h);

/* ************************* Lecture 13 *************************** */
// Synchronous
/* 
    one at a time
    and in order
*/

/* *********************************** lecture[16] - the scope chain **************************************/

// function b() {
// 	console.log(myVar);
// }

// function a() {
// 	var myVar = 11;
// 	b();
// }

// var myVar = 25;
// a();
// in this example b tries to find myVar so the scope chain here was global so even if a calls b  b will still look at the global

// function a() {
// 	var myVar = 11;
// 	b();
// 	function b() {
// 		console.log(myVar);
// 	}
// }
// var myVar = 25;
// a();
// here the scope chain for b is a

////////////////////////////////////////// lecture[18] - What About Asynchronous Callbacks

// Big Word Alert - Asynchronous: More than one at a time

function waitThreeSeconds() {
	let ms = 3000 + new Date().getTime();
	while (new Date().getTime() < ms) {}
	console.log('function waitThreeSeconds done');
}

function clickHandler() {
	console.log('click event!');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('excution finished');

// the console.log of these three will be
// function waitThreeSeconds done
// excution finished
// click event!
// and that's because the javascript engine wont look at the event stack untill it finishs
