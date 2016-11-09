import data from '../data.json';
import update from 'react-addons-update';

const clothingItems = (state = data.items, action) => {
	switch (action.type) {
		case "TOGGLE_ITEM":
			let itemIndex = state.findIndex((piece) => piece.id == action.item.id);
			return update( state, {
	      [itemIndex]: {
          available: {
            $set: !action.item.available
          }
        }
      });
		default:
			return state;
	}
}

export default clothingItems;