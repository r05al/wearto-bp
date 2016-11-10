import React, { Component, PropTypes } from 'react';
import ClothingItemForm from './ClothingItemForm';
import { connect } from 'react-redux';
import { getClothingItem } from '../reducers';
import { createDraft, updateDraft, updateClothingItem } from '../actions'

class EditClothingItem extends Component {

	// componentWillMount() {
	// 	this.props.createDraft(this.props.card);	
	// }
	componentDidMount() {
		this.props.createDraft(this.props.card);	
	}

	handleChange(field, value) {
		this.props.updateDraft(field, value);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.updateClothingItem(this.props);
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

EditClothingItem.PropTypes = {
	itemCallbacks: PropTypes.object
};

const mapStateToProps = (state, ownProps) => (
  {
    draft: state.clothingItemDraft,
    card: getClothingItem(state, ownProps.params.id)
  }
);

const mapDispatchToProps = ({
	createDraft,
	updateDraft,
	updateClothingItem
})


export default connect(mapStateToProps, mapDispatchToProps)(EditClothingItem);
