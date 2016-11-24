import { fromJS } from 'immutable';
import {
  DESELECT_ITEM,
  SET_LOOK,
  SELECT_ITEM,
  UPDATE_DATE,
  UPDATE_CLOTHING_ITEM,
  UPDATE_LOOK_DRAFT
} from '../constants';

const defaultLook = () => {
  return fromJS({
    "id" : null,
    "title": "Configure your Look",
    "description": "Select items and prepare yourself for what's coming",
    "date": null,
    "pieces": {
                "jacket" : 0,
                "shirt" : 0,
                "pant" : 0,
                "shoe" : 0
              }
  });
};

const lookDraft = (state = defaultLook(), action) => {
  switch (action.type) {
		case DESELECT_ITEM:
      return state.setIn(['pieces', action.itemType], 0);
    case SET_LOOK:
      if (action.look) {
        return state.set(action.look);  
      } else {
        return defaultLook();
      }
		case SELECT_ITEM:
      return state.setIn(['pieces', action.itemType], action.id);
    case UPDATE_DATE:
      return state.set('date', action.date);
    case UPDATE_CLOTHING_ITEM:
      if state.pieces.includes(action.id) {
        return state.setIn(['pieces', action.item.get('type')], action.itemDraft)
      }
    case UPDATE_LOOK_DRAFT:
      return state.set(action.field, action.value);
		default:
			return state;
	}
}

export default lookDraft;
