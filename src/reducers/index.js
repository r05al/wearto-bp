import { combineReducers } from 'redux';
import clothingItemDraft from './clothingItemDraft';
import clothingItems, * as fromClothingItems from './clothingItems';
import lookDraft from './lookDraft';
import listItems from './listItems';
import looks from './looks';

const wearToApp = combineReducers({
	clothingItemDraft,
	clothingItems,
	lookDraft,
	listItems,
	looks,
})

export default wearToApp;

export const getClothingItem = (state, id) =>
	fromClothingItems.getClothingItem(state.clothingItems, id);

export const getClothingItemIndex = (state, id) =>
	fromClothingItems.getClothingItemIndex(state.clothingItems, id);
