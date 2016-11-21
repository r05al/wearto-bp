import data from '../data.json';
import update from 'react-addons-update';


const lookDraft = (state = data.defaultLook, action) => {
	switch (action.type) {
		case 'DESELECT_ITEM':
			return update( state, {
        pieces: {
          [action.item.type]: {
            $set: {
                    "type": action.item.type
                  }
          }
        }
			});
		case 'SELECT_ITEM':
			return update( state, {
				pieces: {
          [action.item.type]: { $set: action.item }
        }
      });
    case 'UPDATE_DATE':
    	return update( state, {
    		date: { $set: action.date }
    	});
    case 'UPDATE_CLOTHING_ITEM':
      if (state.pieces[action.item.type].id === action.item.id) {
        return update( state, {
          pieces: {
            [action.item.type]: { $set: action.itemDraft }
          }
        });
      }
		default:
			return state;
	}
}

export default lookDraft;