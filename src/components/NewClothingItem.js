import React, { Component, PropTypes } from 'react';
import ClothingItemForm from './ClothingItemForm';
import { updateDraft, addClothingItem } from '../actions'
import { connect } from 'react-redux';

class NewClothingItem extends Component {

	static propTypes = {
		draft: PropTypes.object.isRequired,
		updateDraft: PropTypes.func.isRequired,
		addClothingItem: PropTypes.func.isRequired
	}

	handleChange(field, value) {
		this.props.updateDraft(field, value);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addClothingItem(this.props.draft);
		this.props.router.push('/');
	}

	handleClose(e) {
		this.props.router.push('/');
	}

	render() {
		return (
			<ClothingItemForm draftItem={this.props.draft}
												buttonLabel="Add Clothing Item"
												handleChange={this.handleChange.bind(this)}
												handleSubmit={this.handleSubmit.bind(this)}
												handleClose={this.handleClose.bind(this)} />
		);
	}
}

const mapStateToProps = (state) => ({
    draft: state.clothingItemDraft
  }
);

const mapDispatchToProps = {
	updateDraft,
	addClothingItem
} 

export default connect(mapStateToProps, mapDispatchToProps)(NewClothingItem);
