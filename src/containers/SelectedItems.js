import { connect } from 'react-redux';
import { deselect } from '../actions'
import Look from '../components/Look';

const getSelectedItems = (items, action) => {
	switch (action) {
		default:
			return items;
	}
}


const mapStateToProps = (state) => ({
	look: state.lookDraft,
})

const mapDispatchToProps = ({
	deselect,
})

const SelectedItems = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Look);

export default SelectedItems;