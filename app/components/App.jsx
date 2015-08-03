import React from 'react';
import Notes from './Notes';
import uuid from 'node-uuid';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	
		this.state = 
		{
			notes : [
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

			]
		};

		this.addItem = this.addItem.bind(this);
	}	

	render() {
		const notes = this.state.notes;

		return (
			<div>
				<button onClick={this.addItem}>+</button>
				<Notes items={notes} />
			</div>
		);
	}

	addItem() {
		console.log('add item');
		this.setState({
			notes : this.state.notes.concat([{
				id: uuid.v4(),
				task: 'New task' 
			}])
		});
	}
}