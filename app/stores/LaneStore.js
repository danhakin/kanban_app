import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';

class LaneStore {
	constructor() {
		this.bindActions(LaneActions);

		this.lanes = this.lanes || [];
	}

	create(lane) {
		const lanes = this.lanes;

		lanes.notes = lane.notes || [];

		this.setState({
			lanes : lanes.concat(lane)
		});
	}
}

export default alt.createStore(LaneStore, 'LaneStore');
