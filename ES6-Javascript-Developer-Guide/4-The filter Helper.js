///////////////////////////////////////////////////////////
// lecture [1] - Selecting Needed Data With Filter
// the hardest array helper
const products = [
	{ name: 'banana', type: 'fruit' },
	{ name: 'apple', type: 'fruit' },
	{ name: 'tomato', type: 'vegtable' },
	{ name: 'eggplant', type: 'vegtable' },
	{ name: 'Strawberries', type: 'fruit' }
];

// es5 for loop
// and as always we dont want to mutate the old array
function es5(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].type === 'fruit') newArr.push(arr[i]);
	}
	return newArr;
}

function es6Foreach(arr) {
	let newArr = [];
	arr.forEach((cur) => {
		if (cur.type === 'fruit') newArr.push(cur);
	});
	return newArr;
}

console.log(es5(products));
console.log(es6Foreach(products));
