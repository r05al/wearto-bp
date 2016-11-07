import data from '../data.json';

const clothingItems = (state = data.items, action) => {
	switch (action.type) {
		case "TOGGLE_ITEM":
			return state;
		default:
			return state;
	}
}

export default clothingItems;