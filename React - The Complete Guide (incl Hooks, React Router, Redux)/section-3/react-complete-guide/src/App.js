import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Reham', age: '26' },
			{ name: 'Tarek', age: '24' },
			{ name: 'Khaled', age: '20' },
			{ name: 'Haytham', age: '17' }
		]
	};

	switchNameHandeler = () => {
		alert('i was clicked!');
	};

	render() {
		return (
			<div className="App">
				<h1>Welcome To My First React Code</h1>
				<button onClick={this.switchNameHandeler}>Switch Family Memember</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
					Nothing
				</Person>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
					Nothing
				</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[3].age}>
					Programming
				</Person>
				<Person name={this.state.persons[3].name} age={this.state.persons[3].age}>
					Nothing
				</Person>
			</div>
		);
		// return React.createElement(`div`, { className: 'App' }, React.createElement(`h1`, null, 'Im React App'));
	}
}

// Esc(27), Enter(13)
// document.addEventListener('DOMContentLoaded', () => {
// 	document.addEventListener('keydown', (e) => console.log(e.keyCode));
// });

export default App;
