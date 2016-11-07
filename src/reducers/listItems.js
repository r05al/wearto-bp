import update from 'react-addons-update';

const initialState = {
	"jacket": false,
	"shirt": false,
	"pant": false,
	"shoe": false
}

const listItems = (state = initialState, action) => {
	switch (action.type) {
		case "TOGGLE_LIST":
			return update( state, {
        [action.id]: { $set: !state[action.id] }
      });
		default:
			return state;
	}
}

export default listItems;