import { combineReducers } from 'redux';
import clothingItems from './clothingItems';
import look from './look';
import listItems from './listItems';

const wearToApp = combineReducers({
	clothingItems,
	look,
	listItems,
})

export default wearToApp;