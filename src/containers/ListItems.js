import { connect } from 'react-redux';
import List from '../components/List';
import { select, toggleItem, toggleList } from '../actions';

const mapStateToProps = (state) => ({
	clothingItems: state.clothingItems,
	look: state.lookDraft,
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