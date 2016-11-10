import { combineReducers } from 'redux';
import clothingItemDraft from './clothingItemDraft';
import clothingItems, * as fromClothingItems from './clothingItems';
import look from './look';
import listItems from './listItems';

const wearToApp = combineReducers({
	clothingItemDraft,
	clothingItems,
	look,
	listItems,
})

export default wearToApp;

export const getClothingItem = (state, id) =>
	fromClothingItems.getClothingItem(state.clothingItems, id);

export const getClothingItemIndex = (state, id) =>
	fromClothingItems.getClothingItemIndex(state.clothingItems, id);
