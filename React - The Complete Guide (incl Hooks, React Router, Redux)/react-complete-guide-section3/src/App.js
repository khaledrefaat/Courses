import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
// import Person from './Person/Person';

const App = (props) => {
	const [ personState, setPersonState ] = useState({
		persons: [
			{ name: 'Reham', age: '26' },
			{ name: 'Tarek', age: '24' },
			{ name: 'Khaled', age: '20' },
			{ name: 'Haytham', age: '17' }
		]
	});

	const [ otherState, setOtherState ] = useState('SomeOtherValue');
	console.log(personState, otherState);

	const switchNameHandeler = () => {
		// alert('i was clicked!');
		// don't do this => this.state.persons[2].name = 'Khaled Refaat';
		setPersonState({
			persons: [
				{ name: 'Reham Refaat', age: '26' },
				{ name: 'Tarek Refaat', age: '24' },
				{ name: 'Khaled Refaat', age: '21' },
				{ name: 'Haytham Refaat', age: '17' }
			]
		});
	};

	return (
		<div className="App">
			<button onClick={switchNameHandeler}>Switch Family Memember</button>
			<h1>Welcome To My First React Code</h1>
			<Person name={personState.persons[0].name} age={personState.persons[0].age}>
				Nothing
			</Person>
			<Person name={personState.persons[1].name} age={personState.persons[1].age}>
				Nothing
			</Person>
			<Person name={personState.persons[2].name} age={personState.persons[2].age}>
				Programming
			</Person>
			<Person name={personState.persons[3].name} age={personState.persons[3].age}>
				Nothing
			</Person>
		</div>
	);
	// return React.createElement(`div`, { className: 'App' }, React.createElement(`h1`, null, 'Im React App'));
};

export default App;

// state = {
// 	persons: [
// 		{ name: 'Reham', age: '26' },
// 		{ name: 'Tarek', age: '24' },
// 		{ name: 'Khaled', age: '20' },
// 		{ name: 'Haytham', age: '17' }
// 	]
// };
