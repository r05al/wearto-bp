import React, { Component, PropTypes } from 'react';
import LookForm from './LookForm';
import { updateLookDraft, addLook } from '../actions';
import moment from 'moment';
import { connect } from 'react-redux';

class NewLook extends Component {

	static propTypes = {
		look: PropTypes.object.isRequired,
		updateLookDraft: PropTypes.func.isRequired,
		addLook: PropTypes.func.isRequired
	}

	handleChange(field, value) {
		this.props.updateLookDraft(field, value);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addLook(this.props.look);
		this.props.router.push('/');
	}

	handleClose(e) {
		this.props.router.push('/');
	}

	render() {
		return (
			<LookForm draftLook={this.props.look}
								buttonLabel="Save Look"
								handleChange={this.handleChange.bind(this)}
								handleSubmit={this.handleSubmit.bind(this)}
								handleClose={this.handleClose.bind(this)} />
		);
	}
}

const mapStateToProps = (state) => ({
	look: state.lookDraft,
});

const mapDispatchToProps = {
	updateLookDraft,
	addLook
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLook);
