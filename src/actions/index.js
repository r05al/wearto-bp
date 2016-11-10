export const deselect = (item) => ({
	type: "DESELECT_ITEM",
	item
})

export const select = (item) => ({
	type: "SELECT_ITEM",
	item
})

export const toggleItem = (item) => ({
	type: "TOGGLE_ITEM",
	item
})

export const toggleList = (id) => ({
	type: "TOGGLE_LIST",
	id
})

export const createDraft = (item) => ({
	type: "CREATE_DRAFT",
	item
})

export const updateDraft = (field, value) => ({
	type: "UPDATE_DRAFT",
	field,
	value
})

export const updateClothingItem = (item, itemDraft) => ({
	type: "UPDATE_CLOTHING_ITEM",
	item,
	itemDraft
})