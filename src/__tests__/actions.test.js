import {
	deselect,
	select,
	toggleItem,
	toggleList,
	createDraft,
	updateDraft,
	updateClothingItem,
	addClothingItem,
	updateDate,
	setLook,
	updateLookDraft,
	addLook,
	updateLook
} from '../actions';
import { items } from '../data.json';

describe('actions', function() {
	let testItem = items[0];
	let testItemDraft = items[1];
	const defaultLook = () => {
	  return {
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
	  }
	};

	describe('deselect', function() {
		it('should have type DESELECT_ITEM', function() {
			expect(deselect().type).toEqual("DESELECT_ITEM");
		});

		it('should pass on the item', function() {
			expect(deselect(testItem).item).toEqual(testItem);
		});
	});

	describe('select', function() {
		it('should have type SELECT_ITEM', function() {
			expect(select().type).toEqual("SELECT_ITEM");
		});

		it('should pass on the item', function() {
			expect(select(testItem).item).toEqual(testItem);
		});
	});

	describe('toggleItem', function() {
		it('should have type TOGGLE_ITEM', function() {
			expect(toggleItem().type).toEqual("TOGGLE_ITEM");
		});

		it('should pass on the item', function() {
			expect(toggleItem(testItem).item).toEqual(testItem);
		});
	});

	describe('toggleList', function() {
		it('should have a type TOGGLE_LIST', function() {
			expect(toggleList().type).toEqual("TOGGLE_LIST");
		});

		it('should pass on the id', function() {
			var id = 11;
			expect(toggleList(id).id).toEqual(id);
		});
	});

	describe('createDraft', function() {
		it('should have a type CREATE_DRAFT', function() {
			expect(createDraft().type).toEqual("CREATE_DRAFT");
		});

		it('should pass on the item', function() {
			expect(createDraft(testItem).item).toEqual(testItem);
		});
	});

	describe('updateDraft', function() {
		it('should have a type UPDATE_DRAFT', function() {
			expect(updateDraft().type).toEqual("UPDATE_DRAFT");
		});

		it('should pass on the field and value', function() {
			var field = "title";
			var value = "Titleist";
			expect(updateDraft(field, value).field).toEqual("title");
			expect(updateDraft(field, value).value).toEqual("Titleist");
		});
	});

	describe('updateClothingItem', function() {
		it('should have a type UPDATE_CLOTHING_ITEM', function() {
			expect(updateClothingItem().type).toEqual("UPDATE_CLOTHING_ITEM");
		});

		it('should pass on the item and itemDraft', function() {
			expect(updateClothingItem(testItem, testItemDraft).item).toEqual(testItem);
			expect(updateClothingItem(testItem, testItemDraft).itemDraft).toEqual(testItemDraft);
		});
	});

	describe('addClothingItem', function() {
		it('should have a type ADD_CLOTHING_ITEM', function() {
			expect(addClothingItem().type).toEqual("ADD_CLOTHING_ITEM");
		});

		it('should pass on the itemDraft', function() {
			expect(addClothingItem(testItemDraft).itemDraft).toEqual(testItemDraft);
		});
	});

	describe('updateDate', function() {
		it('should have a type UPDATE_DATE', function() {
			expect(updateDate().type).toEqual("UPDATE_DATE");
		});

		it('should pass on the date', function() {
			var date = Date.now();
			expect(updateDate(date).date).toEqual(date);
		});
	});

	describe('setLook', function() {
		it('should have a type SET_LOOK', function() {
			expect(setLook().type).toEqual("SET_LOOK");
		});

		it('should pass on the look', function() {
			var look = defaultLook();
			expect(setLook(look).look).toEqual(look);
		});
	});

	describe('updateLookDraft', function() {
		it('should have a type of', function() {
			expect(updateLookDraft().type).toEqual("UPDATE_LOOK_DRAFT");
		});

		it('should pass on the field and value', function() {
			var field = "title";
			var value = "Titleist";
			expect(updateLookDraft(field, value).field).toEqual(field);
			expect(updateLookDraft(field, value).value).toEqual(value);
		});
	});

	describe('addLook', function() {
		it('should have a type of', function() {
			expect(addLook().type).toEqual("ADD_LOOK");
		});

		it('should pass on the lookDraft', function() {
			var lookDraft = defaultLook();
			expect(addLook(lookDraft).lookDraft).toEqual(lookDraft);
		});
	});

	describe('updateLook', function() {
		it('should have a type of', function() {
			expect(updateLook().type).toEqual("UPDATE_LOOK");
		});

		it('should pass on the lookDraft', function() {
			var lookDraft = defaultLook();
			expect(updateLook(lookDraft).lookDraft).toEqual(lookDraft);
		});
	});
});