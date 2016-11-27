import reducer from '../reducers/clothingItems';
import { fromJS } from 'immutable';
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
		).toEqual(fromJS(items));
	});

});