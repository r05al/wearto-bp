import { combineReducers } from 'redux';
import clothingItemDraft from './clothingItemDraft';
import clothingItems, * as fromClothingItems from './clothingItems';
import look from './look';
import listItems from './listItems';
import savedLooks from './savedLooks';

const wearToApp = combineReducers({
	clothingItemDraft,
	clothingItems,
	look,
	listItems,
	savedLooks,
})

export default wearToApp;

export const getClothingItem = (state, id) =>
	fromClothingItems.getClothingItem(state.clothingItems, id);

export const getClothingItemIndex = (state, id) =>
	fromClothingItems.getClothingItemIndex(state.clothingItems, id);
