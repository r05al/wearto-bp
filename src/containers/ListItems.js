import { connect } from 'react-redux';
import List from '../components/List';
import { select, toggleItem, toggleList } from '../actions';

const getSelectedItems = (items, action) => {
	switch (action) {
		default:
			return items;
	}
}

const mapStateToProps = (state) => ({
	clothingItems: state.clothingItems,
	look: state.look,
	listItems: state.listItems,
})

const mapDispatchToProps = ({
	select,
	toggleItem,
	toggleList,
})

const ListItems = connect(
	mapStateToProps,
	mapDispatchToProps
)(List);

export default ListItems;