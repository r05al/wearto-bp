import update from 'react-addons-update';
import {
	ADD_LOOK,
	UPDATE_LOOK
} from '../constants';

const looks = (state = [], action) => {
	switch (action.type) {
		case ADD_LOOK:
			let look = update(action.lookDraft, {
				id: { $set: Date.now() }
			});
			return update(state, {
				$push: [look]
			});
		case UPDATE_LOOK:
			let lookIndex = getLookIndex(state, action.lookDraft.id);
			return update(state, {
				[lookIndex]: {
					$set: action.lookDraft
				}
			});
		default:
			return state;
	}
}

export default looks;

export const getLook = (state, id) => state.find((look) => look.id == id);
export const getLookIndex = (state, id) => state.findIndex((look) => look.id == id);
