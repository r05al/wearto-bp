import React, { Component, PropTypes } from 'react';
import LookForm from './LookForm';
import { connect } from 'react-redux';
import moment from 'moment';
import { updateLookDraft, updateLook } from '../actions';

class EditLook extends Component {

	static propTypes = {
		lookDraft: PropTypes.object.isRequired,
		updateLookDraft: PropTypes.func.isRequired,
		updateLook: PropTypes.func.isRequired
	}

	handleChange(field, value) {
		this.props.updateLookDraft(field, value);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.updateLook(this.props.lookDraft);
		this.props.router.push('/');
	}

	handleClose(e) {
		this.props.router.push('/');
	}

	render() {
		return (
			<LookForm draftLook={this.props.lookDraft}
								buttonLabel="Save Look"
								handleChange={this.handleChange.bind(this)}
								handleSubmit={this.handleSubmit.bind(this)}
								handleClose={this.handleClose.bind(this)} />
		);
	}
}

const mapStateToProps = (state) => ({
	lookDraft: state.lookDraft,
})

const mapDispatchToProps = ({
	updateLookDraft,
	updateLook
})

export default connect(mapStateToProps, mapDispatchToProps)(EditLook);
