import reducer from '../reducers/clothingItems';
import * as types from '../constants';
import { items } from '../data.json';

describe('clothingItems reducer', () => {
	const testItem = {
    id: Date.now(),
    title:'',
    tags:'',
    type:'jacket',
    available: true
	};
	
	it('should return initial state', () => {
		const initState = reducer(undefined, {})
		expect(
			reducer(undefined, {})
		).toEqual(items);
	});

	// it('should handle TOGGLE_ITEM', () => {
	// 	expect(
	// 		reducer(items, {
	// 			type: types.TOGGLE_ITEM,
	// 			id: testItem.id
	// 		})
	// 	).toEqual(
	// 		{
	// 			id: state.id,
	// 			title:'',
	// 			tags:'',
	// 			type:'jacket',
	// 			available: true
	// 		}
	// 	);
	// });

	// it('should handle CREATE_DRAFT with valid item passed', () => {
	// 	expect(
	// 		reducer(undefined, {
	// 			type: types.CREATE_DRAFT,
	// 			item: testItem
	// 		})
	// 	).toEqual(testItem);
	// });

	// it('should handle UPDATE_DRAFT', () => {
	// 	expect(
	// 		reducer(testItem, {
	// 			type: types.UPDATE_DRAFT,
	// 			field: "title",
	// 			value: "Updated Title"
	// 		})
	// 	).toEqual(
	// 		{
	// 			id: testItem.id,
	// 			title:'Updated Title',
	// 			tags:'',
	// 			type:'jacket',
	// 			available: true
	// 		}
	// 	);
	// });

});