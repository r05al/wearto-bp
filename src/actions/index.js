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