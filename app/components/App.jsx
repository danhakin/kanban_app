import React from 'react';
import Note from './Note';
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
				<ul>{notes.map(this.renderNote)}</ul>
			</div>
		);
	}

	renderNote(note) {
		return (
			<li key={`note${note.id}`}>
				<Note value={note.task} />
			</li>
		);
	}
}