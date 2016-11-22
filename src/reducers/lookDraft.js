import update from 'react-addons-update';

const defaultLook = () => {
  return {
    "id" : null,
    "title": "Configure your Look",
    "description": "Select items and prepare yourself for what's coming",
    "date": null,
    "pieces": {
                "jacket" : { "type": "jacket" },
                "shirt" : { "type": "shirt" },
                "pant" : { "type": "pant" },
                "shoe" : { "type": "shoe" }
              }
  }
};

const lookDraft = (state = defaultLook(), action) => {
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
    case 'SET_LOOK':
      if (action.look) {      
        return update(state, { 
          $set: action.look 
        });
      } else {
        return defaultLook();
      }
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
      case 'UPDATE_LOOK_DRAFT':
        return update(state, {
          [action.field]: {
            $set: action.value
          }
        })
		default:
			return state;
	}
}


export default lookDraft;
