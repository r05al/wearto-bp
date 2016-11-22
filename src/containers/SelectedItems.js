import { connect } from 'react-redux';
import { deselect } from '../actions'
import Look from '../components/Look';

const mapStateToProps = (state) => ({
	look: state.lookDraft,
	clothingItems: state.clothingItems
})

const mapDispatchToProps = ({
	deselect,
})

const SelectedItems = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Look);

export default SelectedItems;