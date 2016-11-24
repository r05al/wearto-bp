import { connect } from 'react-redux';
import List from '../components/List';
import { selectItem, toggleItem, toggleList } from '../actions';

const mapStateToProps = (state) => ({
	clothingItems: state.clothingItems,
	listItems: state.listItems,
})

const mapDispatchToProps = ({
	selectItem,
	toggleItem,
	toggleList,
})

const ListItems = connect(
	mapStateToProps,
	mapDispatchToProps
)(List);

export default ListItems;