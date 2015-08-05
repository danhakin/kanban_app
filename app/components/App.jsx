import uuid from 'node-uuid';
import React from 'react';

import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

import connect from '../decorators/connect';

@connect(NoteStore)
export default class App extends React.Component {
	constructor(props) {
		super(props);
	
		this.storeChanged = this.storeChanged.bind(this);
		this.state = NoteStore.getState();
	}	

	componentDidMount() {
		NoteStore.listen(this.storeChanged);
	}

	componentWillUnmount() {
		NoteStore.listen(this.storeChanged);
	}

	storeChanged(state) {
		this.setState(state);
	}

	render() {
		const notes = this.props.notes;

		return (
			<div>
				<button onClick={this.addItem}>+</button>
				<Notes items={notes} onEdit={this.itemEdited}/>
			</div>
		);
	}

	addItem() {
		NoteActions.create({id: uuid.v4(), task: 'New Task'});
	}

	itemEdited(id, task) {
		if(task) {
			NoteActions.update({id, task});
		} else {
			NoteActions.delete(id);
		}
	}
}