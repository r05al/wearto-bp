import data from '../data.json';
import update from 'react-addons-update';

let itemIndex;

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
    case 'UPDATE_CLOTHING_ITEM':
    	itemIndex = getClothingItemIndex(state, action.item.id);
    	return update(state, {
    		[itemIndex]: {
    			$set: action.item
    		}
    	});
		default:
			return state;
	}
}

export default clothingItems;

export const getClothingItem = (state, id) => state.find((item)=>item.id == id);
export const getClothingItemIndex = (state, id) => state.findIndex((item)=>item.id == id);