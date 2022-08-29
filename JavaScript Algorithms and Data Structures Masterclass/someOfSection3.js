// /////////////////////////////////////////////////////////////

// space complexity in js Rules of Thumb

// most primitives(booleans, numbers , ... etc ) are constant space
// strings are O(n) where n is the string length
// Reference types are genrally O(n), where n is the length of the array or number of object keys

///////////////////// lecture[14] - The BIG O of Objects

// when to use object
// [1] - you dont need order
// [2] - when you need fast accsess / insertion/ removal
// insertion - O(1), removal - O(1), searching - O(n), acsess - O(1)
// when you dont need order objects are excellent choice
// Objects Methods
// Object.keys O(n), Object.values O(n), Object.entries O(N), hasOwnProperty O(1)
// simple example
// const student = {
// 	firstName: 'Khaled',
// 	lastName: 'Elkady',
// 	Age: 21,
// 	phoneNumber: 01062715774
// };
// all of this methods are O(n) you can uncomment it to see why
// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

// this is O(1) you can also unComment to see why (returns bollean)
// console.log(student.hasOwnProperty('Age'));

///////////////////// lecture[15] - When are Arrays Slow?
// when to use array
// [1] - when you need order
// [2] - when you need fast acsess / insertion and removal(sort of....)
// insertion - depends, removal - depends, searching - O(n), Acsess - O(1)
// insertion and removal if it's about the last item on the aray would be O(1)if the first one would be O(n) so (push) and (pop) are better than (shift) and (unshift) - if that's a huge project ofcourse

///////////////////// lecture[16] - Big O of Array Methods
// [pop, push] - O(1), [shift, unshift, concat, slice, splice] - O(n),
// sort - O(n * Log n), [forEach, map, filter, reduce, ...etc] - O(n)
