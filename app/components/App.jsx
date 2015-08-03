import React from 'react';
import Notes from './Notes';
import uuid from 'node-uuid';

export default class App extends React.Component {
	render() {
		const notes = [
			{
				id: uuid.v4(),
				task: 'Learn Webpack'
			},
			{
				id: uuid.v4(),
				task: 'Learn React'
			},
			{
				id: uuid.v4(),
				task: 'Do Laundry'
			},

		];

		return (
			<div>
				<button onClick={this.addItem}>+</button>
				<Notes items={notes} />
			</div>
		);
	}
	addItem() {
		console.log('add item');
	}
}