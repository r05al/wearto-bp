import update from 'react-addons-update';

const defaultDraftCard = () => {
  return {
    id: Date.now(),
    title:'',
    tags:'',
    type:'jacket',
    available: true
  }
};

const clothingItemDraft = (state = defaultDraftCard(), action) => {
	switch (action.type) {
		case 'CREATE_DRAFT_OF_EXISTING':
			return update(state, {
				$set: action.item
			});
		case 'UPDATE_DRAFT':
			return update(state, {
				[action.field]: {
					$set: action.value
				}
			});
		default: 
			return state; 	
	}
}

export default clothingItemDraft;