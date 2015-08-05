import uuid from 'node-uuid';
import AltContainer from 'alt/AltContainer';
import React from 'react';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class Lane extends React.Component {
	render() {
		const {id, name, ...props} = this.props;

		return (
			<div {...props}>
				<div className='lane-header'>
					<div className='lane-name'>{name}</div>
					<div className='lane-add-note'>
						<button onClick={this.addNote}>+</button>
					</div>
				</div>
				<AltContainer
					stores={[NoteStore]}
					inject={{
						items: () => NoteStore.getState().notes || []
					}}
				>
					<Notes onEdit={this.noteEdited} />
				</AltContainer>
			</div>
		);
	}

	addNote() {
		NoteActions.create({id: uuid.v4(), task: 'New Task'});
	}

	noteEdited(id, task) {
		if (task) {
			NoteActions.update({id, task});
		} else {
			NoteActions.delete(id);
		}
	}
}