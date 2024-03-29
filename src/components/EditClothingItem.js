import React, { Component, PropTypes } from 'react';
import ClothingItemForm from './ClothingItemForm';
import { connect } from 'react-redux';
import { getClothingItem } from '../reducers';
import { createDraft, updateDraft, updateClothingItem } from '../actions';

class EditClothingItem extends Component {

	componentWillMount() {
		this.props.createDraft(this.props.item);	
	}

	static propTypes = {
		draft: PropTypes.object,
		item: PropTypes.object,
		createDraft: PropTypes.func.isRequired,
		updateDraft: PropTypes.func.isRequired,
		updateClothingItem: PropTypes.func.isRequired
	};

	handleChange(field, value) {
		this.props.updateDraft(field, value);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.updateClothingItem(this.props.item, this.props.draft);
		this.props.router.push('/');
	}

	handleClose(e) {
		this.props.router.push('/');
	}

	render() {
		return (
			<ClothingItemForm draftItem={this.props.draft}
												buttonLabel="Edit Clothing Item"
												handleChange={this.handleChange.bind(this)}
												handleSubmit={this.handleSubmit.bind(this)}
												handleClose={this.handleClose.bind(this)} />
		);
	}
}

const mapStateToProps = (state, ownProps) => (
  {
    draft: state.clothingItemDraft,
    item: getClothingItem(state.clothingItems, ownProps.params.id)
  }
);

const mapDispatchToProps = ({
	createDraft,
	updateDraft,
	updateClothingItem
})

export default connect(mapStateToProps, mapDispatchToProps)(EditClothingItem);
