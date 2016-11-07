import data from '../data.json';
import update from 'react-addons-update';


const look = (state = data.defaultLook, action) => {
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
		default:
			return state;
	}
}

export default look;