import React, { Component } from 'react';

const random = Math.floor(Math.random() * 30);
let legal = '';
if (random >= 18) {
	legal = 'old enough';
} else legal = 'still small';

class Person extends Component {
	render() {
		return (
			<h2>
				Hey There i'm {this.props.name} and i'm {this.props.age} {this.props.children}
			</h2>
		);
	}
}
export default Person;
