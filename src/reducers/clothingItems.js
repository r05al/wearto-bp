import data from '../data.json';
import update from 'react-addons-update';

let itemIndex;

const clothingItems = (state = data.items, action) => {
	switch (action.type) {
		case "TOGGLE_ITEM":
			itemIndex = state.findIndex((piece) => piece.id == action.item.id);
			return update( state, {
	      [itemIndex]: {
          available: {
            $set: !action.item.available
          }
        }
      });
    case 'ADD_CLOTHING_ITEM':
    	let item;
    	if (action.itemDraft.href === undefined) {
    	  item = Object.assign({}, 
    	  	action.itemDraft, {href: "http://placehold.it/455x475"}
    	  	);
    	  return update(state, {
    	  	$push: [item]
    	  });
    	} else {
	    	return update(state, {
	    		$push: [action.itemDraft] 
	    	});
    	}
    case 'UPDATE_CLOTHING_ITEM':
        itemIndex = getClothingItemIndex(state, action.item.id);
        return update(state, {
          [itemIndex]: {
            $set: action.itemDraft
          }
        });
		default:
			return state;
	}
}

export default clothingItems;

export const getClothingItem = (state, id) => state.find((item)=>item.id == id);
export const getClothingItemIndex = (state, id) => state.findIndex((item)=>item.id == id);
